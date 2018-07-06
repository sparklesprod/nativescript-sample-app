import {Component, OnInit} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";
import {ActivatedRoute} from "@angular/router";
import {FirebaseService} from "~/services/firebase.service";
import {Stadium} from "~/modules/stadiums/classes/stadium";
import {StadiumService} from "~/modules/stadiums/services/stadium.service";

@Component({
    moduleId: module.id,
    selector: 'ns-stadium-info-edit',
    templateUrl: './stadium-info-edit.component.html',
    styleUrls: ['stadium-info-edit.component.css']
})
export class StadiumInfoEditComponent implements OnInit {
    private stadium_id: string;
    public stadium: Stadium;
    public isLoading: boolean = true;

    constructor(private route: ActivatedRoute,
                private routerExtensions: RouterExtensions,
                private firebaseService: FirebaseService,
                private stadiumService: StadiumService) {
    }

    ngOnInit() {
        this.route.params.subscribe((params: any) => {
            console.log("test params, ", params);
            this.stadium_id = params['id'];
            console.log(this.stadium_id);
            if (this.stadium_id !== "0") {
                console.log("we here?");
                setTimeout(() => {
                    this.firebaseService.getItem(this.stadium_id).subscribe((stadium) => {
                        this.stadium = stadium;
                        this.isLoading = false;
                    })
                }, 1500);
            } else {
                this.stadium = new Stadium();
                console.log("test with id = 0");
            }
        });
    }

    submit() {
        console.log('New data', this.stadium);
        console.log("create 'update()' method");
        if (this.stadium_id === '0') {
            this.stadiumService.addStadium('stadiums', this.stadium).then(() => {
                this.routerExtensions.navigate(['/stadiums']);
            });
        } else {
            this.firebaseService.edit('stadiums', this.stadium_id, this.stadium.name, this.stadium.desc, this.stadium.imagepath).then(() => {
                this.routerExtensions.navigate(['/stadiums', this.stadium_id]);
            });
        }
    }

    goBack() {
        if (this.stadium_id !== "0") {
            this.routerExtensions.navigate(['/stadiums', this.stadium_id]);
        } else {
            this.routerExtensions.navigate(['/stadiums']);
        }
    }

}