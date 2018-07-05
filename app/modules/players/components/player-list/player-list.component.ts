import {Component, OnInit} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";

@Component({
    moduleId: module.id,
    selector: 'ns-player-list',
    templateUrl: './player-list.component.html',
    styleUrls: ['player-list.component.css']
})

export class PlayerListComponent implements OnInit {

    constructor(private routerExtensions: RouterExtensions) {}

    ngOnInit() {}

    public goBack() {
        this.routerExtensions.navigate(['/']);
    }
}