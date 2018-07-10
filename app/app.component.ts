import {Component, OnInit} from "@angular/core";
import * as firebase from "nativescript-plugin-firebase";
import {BackendService} from "~/services/backend.service";
import * as application from "tns-core-modules/application";
import * as connectivityModule from "tns-core-modules/connectivity";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent implements OnInit {

    private connectionType: any;

    constructor(private backendService: BackendService) {
        this.connectionType = connectivityModule.getConnectionType();
        connectivityModule.startMonitoring((newConnectionType) => {
            switch (newConnectionType) {
                case connectivityModule.connectionType.none:
                    console.log("Connection type changed to none.");
                    break;
                case connectivityModule.connectionType.wifi:
                    console.log("Connection type changed to WiFi.");
                    break;
                case connectivityModule.connectionType.mobile:
                    console.log("Connection type changed to mobile.");
                    break;
                default:
                    break;
            }
        });
    }

    ngOnInit() {
        // отмена нажания системной кнопки Back
        application.android.on(application.AndroidApplication.activityBackPressedEvent, (args) => {
            console.log("click native button 'back'");
            args['cancel'] = true;
        });
        // end
        firebase.init({
            persist: false,
            storageBucket: 'gs://mobile-apps-ns.appspot.com',
            onAuthStateChanged: (data: any) => {
                if (data.loggedIn) {
                    this.backendService.token = data.user.uid;
                }
                else {
                    console.log("user is not authorized");
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
