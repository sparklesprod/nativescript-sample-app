import {Routes} from "@angular/router";
import {AuthGuard} from "~/auth-guard.service";

export const authProvides = [
    AuthGuard
];

export const routes: Routes = [
    { path: "", redirectTo: "/list", pathMatch: "full" }
];