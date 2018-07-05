import {Component, OnInit} from "@angular/core";
import {FirebaseService} from "~/services/firebase.service";
import {AnimationCurve} from "tns-core-modules/ui/enums";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'ns-list',
    templateUrl: './list.component.html',
    styleUrls: ['list.component.css']
})
export class ListComponent implements OnInit {

    constructor(private router: Router,
                private firebaseService: FirebaseService) {
    }

    ngOnInit() {
        console.log("Произошел редирект на LIST COMPONENT");
    }

    logout() {
        this.firebaseService.logout();
        this.router.navigate(['/login']);
    }

    animateImage(image, delay) {
        image.animate({
            curve: AnimationCurve.ease,
            opacity: 1,
            scale: { x: 1, y: 1 },
            duration: 400,
            delay: delay
        })
    }

    animateLabel(label, delay) {
        label.animate({
            curve: AnimationCurve.easeInOut,
            opacity: 1,
            translate: {x: 0, y: 0},
            duration: 800,
            delay: delay,
        });
    }
}