import {Component, OnInit} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";
import {Player} from "~/modules/players/classes/player";
import {SearchBar} from "tns-core-modules/ui/search-bar";

@Component({
    moduleId: module.id,
    selector: 'ns-player-list',
    templateUrl: './player-list.component.html',
    styleUrls: ['player-list.component.css']
})

export class PlayerListComponent implements OnInit {

    public players: Player[] = [
        {
            name: 'Лионель Месси',
            club: 'Барселона',
            country: 'Аргентина',
            position: 'ЛВ',
            photo: '~/images/players/messi.png'
        },
        {
            name: 'Криштиано Роналдо',
            club: 'Реал Мадрид',
            country: 'Португалия',
            position: 'ЛФД',
            photo: '~/images/players/ronaldo.png'
        },
        {
            name: 'Усман Дембеле',
            club: 'Барселона',
            country: 'Франция',
            position: 'НАП',
            photo: '~/images/players/dembele.png'
        },
        {
            name: 'Томас Вермален',
            club: 'Барселона',
            country: 'Бельгия',
            position: 'ЦЗ',
            photo: '~/images/players/vermalen.png'
        },
        {
            name: 'Лионель Месси',
            club: 'Барселона',
            country: 'Аргентина',
            position: 'ЛВ',
            photo: '~/images/players/messi.png'
        },
        {
            name: 'Криштиано Роналдо',
            club: 'Реал Мадрид',
            country: 'Португалия',
            position: 'ЛФД',
            photo: '~/images/players/ronaldo.png'
        }
    ];
    public playersCopy: Player[] = [
        {
            name: 'Лионель Месси',
            club: 'Барселона',
            country: 'Аргентина',
            position: 'ЛВ',
            photo: '~/images/players/messi.png'
        },
        {
            name: 'Криштиано Роналдо',
            club: 'Реал Мадрид',
            country: 'Португалия',
            position: 'ЛФД',
            photo: '~/images/players/ronaldo.png'
        },
        {
            name: 'Усман Дембеле',
            club: 'Барселона',
            country: 'Франция',
            position: 'НАП',
            photo: '~/images/players/dembele.png'
        },
        {
            name: 'Томас Вермален',
            club: 'Барселона',
            country: 'Бельгия',
            position: 'ЦЗ',
            photo: '~/images/players/vermalen.png'
        },
        {
            name: 'Лионель Месси',
            club: 'Барселона',
            country: 'Аргентина',
            position: 'ЛВ',
            photo: '~/images/players/messi.png'
        },
        {
            name: 'Криштиано Роналдо',
            club: 'Реал Мадрид',
            country: 'Португалия',
            position: 'ЛФД',
            photo: '~/images/players/ronaldo.png'
        }
    ];

    constructor(private routerExtensions: RouterExtensions) {}

    ngOnInit() {}

    public goBack() {
        this.routerExtensions.navigate(['/']);
    }

    onLoadMore(args) {
        console.log('Подгрузка новых данных');
    }

    onTextChange(args) {
        const searchText = <SearchBar>args.object;
        this.players = searchText.text.length !== 0 ? this.players.filter(item => item.name.match(new RegExp(searchText.text, "gi")))
            .map(res => res) : this.playersCopy;
    }
}