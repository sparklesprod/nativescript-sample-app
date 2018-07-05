import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { BackendService } from "~/services/backend.service";
import { FirebaseService } from "~/services/firebase.service";

import { AppComponent } from "./app.component";
import { authProvides, routes } from "~/app.routing";
import { ListModule } from "~/list/list.module";
import { LoginModule } from "~/login/login.module";
import { StadiumModule } from "~/modules/stadiums/stadium.module";
import { PlayerModule } from "~/modules/players/player.module";
import { StatisticModule } from "~/modules/statistics/statistic.module";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        NativeScriptUIListViewModule,
        ListModule,
        LoginModule,
        StadiumModule,
        PlayerModule,
        StatisticModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        BackendService,
        FirebaseService,
        authProvides
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }
