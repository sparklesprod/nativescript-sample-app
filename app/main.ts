// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
// import firebase = require("nativescript-plugin-firebase");
// import {BackendService} from "~/services/backend.service";
//
// firebase.init({
//     persist: false,
//     storageBucket: 'gs://mobile-apps-ns.appspot.com',
//     onAuthStateChanged: (data: any) => {
//         if (data.loggedIn) {
//             BackendService.token = data.user.uid;
//         }
//         else {
//             console.log("Пользователь не авторизован");
//             BackendService.token = "";
//         }
//     }
// }).then(() => {
//     console.log('firebase.init done')
// }).catch((error) => {
//     console.log('firebase.init error: ', error)
// });

import { AppModule } from "./app.module";

// A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page. 
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers. 
// A NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, platformNativeScriptDynamic, 
// that sets up a NativeScript application and can bootstrap the Angular framework.
platformNativeScriptDynamic().bootstrapModule(AppModule);
