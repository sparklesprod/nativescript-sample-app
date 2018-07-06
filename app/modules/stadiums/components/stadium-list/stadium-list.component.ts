import {Component, OnInit} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";
import {Stadium} from "~/modules/stadiums/classes/stadium";
import {Observable} from "rxjs";
import {FirebaseService} from "~/services/firebase.service";
import {ListViewEventData, RadListView} from "nativescript-ui-listview";
import {View} from "tns-core-modules/ui/core/view";
import * as camera from "nativescript-camera";
import  * as ImageSource from 'tns-core-modules/image-source';
import {ImageAsset} from "tns-core-modules/image-asset";
import {Image} from "tns-core-modules/ui/image";
import {Page} from "tns-core-modules/ui/page";

@Component({
    moduleId: module.id,
    selector: 'ns-stadium-list',
    templateUrl: './stadium-list.component.html',
    styleUrls: ['stadium-list.component.css']
})

export class StadiumListComponent implements OnInit {
    public stadium: Stadium;
    public stadiumList: Stadium[];
    public image: ImageAsset;
    public isLoading: boolean = true;
    public allDataLoaded: boolean = false;

    constructor(private routerExtensions: RouterExtensions,
                private firebaseService: FirebaseService,
                private page: Page) {
    }

    ngOnInit() {
        console.log("STADUIM-LIST COMPONENT");
        this.firebaseService.getItemsList('stadiums').subscribe((stadiumList: Stadium[]) => {
            setTimeout(() => {
                this.stadiumList = stadiumList;
                this.isLoading = false;
                this.allDataLoaded = true;
            }, 2000);
            // console.log("Загружен лист стадионов: ", this.stadiumList);
        })
        // console.log("CAMERA", camera.requestPermissions());
        // setTimeout(() => {
        //     camera.takePicture({
        //         width: 300,
        //         height: 300,
        //         keepAspectRatio: true
        //     }).
        //     then((imageAsset) => {
        //         console.log("Result is an image asset instance");
        //         this.image = imageAsset;
        //     }).catch((err) => {
        //         console.log("Error -> " + err.message);
        //     });
        // }, 3000);
    }

    public goBack() {
        this.routerExtensions.navigate(['/']);
    }

    public selectedItem(id) {
        console.log("selected stadium id: ", id);
        this.routerExtensions.navigate(['/stadiums', id], { clearHistory: true });
    }

    onPullToRefreshInitiated(args: ListViewEventData) {
        console.log("Refresh");
        setTimeout(() => {
            const listView = args.object;
            listView.notifyPullToRefreshFinished();
        }, 2000);
    }

    onSwipeCellStarted(args: ListViewEventData) {
        console.log('started');
        const swipeLimits = args.data.swipeLimits;
        const swipeView = args['object'];
        const rightItem = swipeView.getViewById<View>('delete-view');
        swipeLimits.left = 0;
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.threshold = rightItem.getMeasuredWidth() / 2;
    }

    onSwipeCellFinished(args) {
        console.log('finished');
    }

    onCellSwiping(args) {
        console.log('swiping...');
    }

    delete(args: ListViewEventData) {
        let stadium = <Stadium>args.object.bindingContext;
        console.log("Stadium", stadium);
        this.firebaseService.delete('stadiums', stadium.id);
    }

    onSelectedItem(args: ListViewEventData) {
        let stadium = <Stadium>(args.object.items[args.index]);
        console.log("Click on Stadium: ", stadium);
        this.routerExtensions.navigate(["/stadiums", stadium.id]);
    }

    add() {
        this.routerExtensions.navigate(['/stadiums', 0, 'edit']);
    }
}