import {NgModule} from "@angular/core";
import {NativeScriptUIListViewModule} from "nativescript-ui-listview/angular";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {NativeScriptFormsModule, NativeScriptRouterModule} from "nativescript-angular";
import {stadiumRouting} from "~/modules/stadiums/stadium.routing";
import {StadiumInfoComponent} from "~/modules/stadiums/components/stadium-info/stadium-info.component";
import {StadiumListComponent} from "~/modules/stadiums/components/stadium-list/stadium-list.component";
import {StadiumService} from "~/modules/stadiums/services/stadium.service";
import {StadiumInfoEditComponent} from "~/modules/stadiums/components/stadium-info-edit/stadium-info-edit.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptUIListViewModule,
        NativeScriptFormsModule,
        stadiumRouting
    ],
    declarations: [
        StadiumInfoEditComponent,
        StadiumInfoComponent,
        StadiumListComponent
    ],
    providers: [StadiumService]
})
export class StadiumModule {}