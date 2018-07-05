import {NgModule} from "@angular/core";
import {NativeScriptUIListViewModule} from "nativescript-ui-listview/angular";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {NativeScriptFormsModule, NativeScriptRouterModule} from "nativescript-angular";
import {playerRouting} from "~/modules/players/player.routing";
import {PlayerListComponent} from "~/modules/players/components/player-list/player-list.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptUIListViewModule,
        NativeScriptFormsModule,
        playerRouting
    ],
    declarations: [PlayerListComponent],
    providers: []
})
export class PlayerModule {}