import {NgModule} from "@angular/core";
import {NativeScriptUIListViewModule} from "nativescript-ui-listview/angular";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {NativeScriptFormsModule, NativeScriptRouterModule} from "nativescript-angular";
import {statisticRouting} from "~/modules/statistics/statistic.routing";
import {StatisticListComponent} from "~/modules/statistics/components/statistic-list/statistic-list.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptUIListViewModule,
        NativeScriptFormsModule,
        statisticRouting
    ],
    declarations: [StatisticListComponent],
    providers: []
})
export class StatisticModule {}