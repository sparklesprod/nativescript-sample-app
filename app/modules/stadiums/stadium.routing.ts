import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {StadiumListComponent} from "~/modules/stadiums/components/stadium-list/stadium-list.component";
import {StadiumInfoComponent} from "~/modules/stadiums/components/stadium-info/stadium-info.component";
import {StadiumInfoEditComponent} from "~/modules/stadiums/components/stadium-info-edit/stadium-info-edit.component";

const stadiumRoutes: Routes = [
    {
        path: 'stadiums',
        children: [
            {
                path: '',
                component: StadiumListComponent
            },
            {
                path: ':id',
                component: StadiumInfoComponent
            },
            {
                path: ':id/edit',
                component: StadiumInfoEditComponent
            },
            {
                path: 'add',
                component: StadiumInfoEditComponent
            }
        ]
    },
];
export const stadiumRouting: ModuleWithProviders = RouterModule.forChild(stadiumRoutes);