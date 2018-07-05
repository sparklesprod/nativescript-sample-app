import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { loginRouting} from "~/login/login.routing";
import { LoginComponent} from "~/login/components/login.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        loginRouting
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule { }