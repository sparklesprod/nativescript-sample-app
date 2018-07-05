import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {NgModule} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular";
import {listRouting} from "~/list/list.routing";

import {ListComponent} from "~/list/components/list.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        listRouting
    ],
    declarations: [ListComponent]
})

export class ListModule {}