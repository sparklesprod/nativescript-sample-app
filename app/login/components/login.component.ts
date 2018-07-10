import {Component, OnInit} from '@angular/core';
import {Page} from "tns-core-modules/ui/page";
import {User} from "~/models/user";
import {FirebaseService} from "~/services/firebase.service";
import {RouterExtensions} from "nativescript-angular";
import {TextField} from "tns-core-modules/ui/text-field";
import {AnimationCurve} from "tns-core-modules/ui/enums";

@Component({
    moduleId: module.id,
    selector: 'ns-login',
    templateUrl: './login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

    public user: User;
    public isLoading = false;
    public isLoggingIn = true;
    public isAuthenticating = false;

    constructor(private page: Page,
                private routerExtensions: RouterExtensions,
                private firebaseService: FirebaseService) {
        this.user = new User();
    }

    ngOnInit() {
        console.log("LOGIN COMPONENT");
        this.page.actionBarHidden = true;
    }

    submit() {
        if (this.isLoggingIn) {
            this.login()
        } else {
            this.signUp();
        }
    }

    private login() {
        this.isLoading = true;
        this.firebaseService.login(this.user)
            .then(() => {
                this.isAuthenticating = false;
                this.routerExtensions.navigate(['/'], {clearHistory: true});
                this.isLoading = false;
            })
            .catch((msg) => {
                this.isAuthenticating = false;
            })
    }

    private signUp() {
        this.firebaseService.register(this.user).then((res) => {
            if (res instanceof Error) {
                return;
            }
            // this.toggleDisplay();
            const email = <TextField>this.page.getViewById('email');
            const password = <TextField>this.page.getViewById('password');
            email.dismissSoftInput();
            password.dismissSoftInput();
            this.login();
        });
    }

    startBackgroundAnimation(bg) {
        bg.animate({
            scale: { x: 1.1, y: 1.1 },
            duration: 10000
        });
    }

    public toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    onFocus(args) {
        let textfield = <TextField>args.object;
        textfield.animate({
            curve: AnimationCurve.ease,
            scale: {x: 1, y: 1}
        })
    }

    onBlur(args) {
        let textfield = <TextField>args.object;
        textfield.animate({
            curve: AnimationCurve.ease,
            scale: {x: 0.9, y: 0.9}
        })
    }

    outsideTap() {
        // первый вариант удалить фокус с textfield
        const emptyField = <TextField>this.page.getViewById('dummy');
        emptyField.focus();
        emptyField.dismissSoftInput();
    }
}