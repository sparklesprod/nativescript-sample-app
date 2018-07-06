import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {FirebaseService} from "~/services/firebase.service";
import {Stadium} from "~/modules/stadiums/classes/stadium";
import {RouterExtensions} from "nativescript-angular";
import {AnimationCurve} from "tns-core-modules/ui/enums";

@Component({
    moduleId: module.id,
    selector: 'ns-stadium-info',
    templateUrl: './stadium-info.component.html',
    styleUrls: ['stadium-info.component.css']
})
export class StadiumInfoComponent implements OnInit {

    private stadium_id: string;
    public stadium: Stadium;
    public showdesc: boolean = false;

    constructor(private route: ActivatedRoute,
                private routerExtensions: RouterExtensions,
                private firebaseService: FirebaseService) {}

    ngOnInit() {
        this.route.params.subscribe((params: any) => {
            this.stadium_id = params['id'];
            this.firebaseService.getItem(this.stadium_id).subscribe((stadium) => {
                this.stadium = stadium;
                console.log("Current stadium object", this.stadium);
            })
        });
    }

    public goBack() {
        this.routerExtensions.navigate(['/stadiums']);
    }

    public edit() {
        console.log("redirect to edit-page");
        this.routerExtensions.navigate(['/stadiums', this.stadium_id, 'edit']);
    }

    public animateStadiumLogo(img) {
        img.animate({
            opacity: 1,
            translate: {x:0, y: 0},
            duration: 1000
        }).then(() => {
            this.showdesc = true;
        })
    }

    public animateDesc(desc) {
        desc.animate({
            curve: AnimationCurve.ease,
            opacity: 1,
            translate: {x: 0, y: 0},
            duration: 400
        })
    }
}