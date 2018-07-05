import {Component, OnInit} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";

@Component({
    moduleId: module.id,
    selector: 'ns-statistic-list',
    templateUrl: './statistic-list.component.html',
    styleUrls: ['statistic-list.component.css']
})

export class StatisticListComponent implements OnInit {

    constructor(private routerExtensions: RouterExtensions) {}

    ngOnInit() {}

    public goBack() {
        this.routerExtensions.navigate(['/']);
    }
}