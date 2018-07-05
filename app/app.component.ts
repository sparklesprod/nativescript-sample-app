import {Component, OnInit} from "@angular/core";
import firebase = require("nativescript-plugin-firebase");
import {BackendService} from "~/services/backend.service";
import * as application from "tns-core-modules/application";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent implements OnInit {

    constructor(private backendService: BackendService) {}

    ngOnInit() {
        application.android.on(application.AndroidApplication.activityBackPressedEvent, (args) => {
            console.log("Нажата кнопка back");
            args['cancel'] = true;
        });
        firebase.init({
            persist: false,
            storageBucket: 'gs://mobile-apps-ns.appspot.com',
            onAuthStateChanged: (data: any) => {
                if (data.loggedIn) {
                    this.backendService.token = data.user.uid;
                }
                else {
                    console.log("Пользователь не авторизован");
                    this.backendService.token = "";
                }
            }
        }).then(() => {
            console.log('firebase.init done');
        }).catch((error) => {
            console.log('firebase.init error: ', error);
        });

    }
}
