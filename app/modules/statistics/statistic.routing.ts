import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {StatisticListComponent} from "~/modules/statistics/components/statistic-list/statistic-list.component";

const statisticRoutes: Routes = [
    {
        path: 'statistics',
        children: [
            {
                path: '',
                component: StatisticListComponent
            }
        ]
    },
];
export const statisticRouting: ModuleWithProviders = RouterModule.forChild(statisticRoutes);