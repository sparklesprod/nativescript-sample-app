import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {PlayerListComponent} from "~/modules/players/components/player-list/player-list.component";

const playerRoutes: Routes = [
    {
        path: 'players',
        children: [
            {
                path: '',
                component: PlayerListComponent
            },
            // {
            //     path: ':id',
            //     // component: null
            // }
        ]
    },
];
export const playerRouting: ModuleWithProviders = RouterModule.forChild(playerRoutes);