import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {AuthGuard} from "~/auth-guard.service";
import {ListComponent} from "~/list/components/list.component";

const listRoutes: Routes = [
    {path: '', component: ListComponent, canActivate: [AuthGuard]},
];
export const listRouting: ModuleWithProviders = RouterModule.forChild(listRoutes);