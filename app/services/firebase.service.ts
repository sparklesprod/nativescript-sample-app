import {Injectable, NgZone } from "@angular/core";
import {BackendService} from "~/services/backend.service";
import firebase = require('nativescript-plugin-firebase');
import {Observable, BehaviorSubject} from "rxjs";
import {User} from "~/models/user";
import {Stadium} from "~/modules/stadiums/classes/stadium";

@Injectable()
export class FirebaseService {

    private _allItems: Array<any> = [];
    items: BehaviorSubject<Array<Stadium>> = new BehaviorSubject([]);

    constructor(private ngZone: NgZone,
                private backendService: BackendService) {}

    public register(user: User) {
        return firebase.createUser({
            email: user.email,
            password: user.password
        }).then((result: any) => {
            // console.log("Зарегистрированный пользователь: ", JSON.stringify(result));
            return JSON.stringify(result);
        }).catch((err) => {
            if (err === "Creating a user failed. com.google.firebase.auth.FirebaseAuthInvalidCredentialsException: The email address is badly formatted.") {
                alert('Ошибка регистрации! Некорректно указан Email');
            } else if (err === "Creating a user failed. Password should be at least 6 characters") {
                alert('Пароль должен быть не менее 6 символов!');
            } else if (err === "Creating a user requires an email and password argument") {
                alert('Для регистрации необходимо указать Email и пароль');
            } else if (err === "Creating a user failed. com.google.firebase.auth.FirebaseAuthUserCollisionException: The email address is already in use by another account.") {
                alert('Ошибка регистрации! Такой Email уже существует!');
            } else {
                alert('Другая ошибка')
            }
            return new Error();
        })
    }

    public login(user: User) {
        return firebase.login({
            type: firebase.LoginType.PASSWORD,
            email: user.email,
            password: user.password
        }).then((result: any) => {
            this.backendService.token = result.uid;
            return JSON.stringify(result);
        }).catch((err) => {
            console.log(err);
            if (err === "Auth type PASSWORD requires an 'passwordOptions.email' and 'passwordOptions.password' argument") {
                alert("Поле Email или пароль заполнены некорректно!");
            } else if (err === "Logging in the user failed. com.google.firebase.auth.FirebaseAuthInvalidCredentialsException: The password is invalid or the user does not have a password.") {
                alert("Неверный пароль!");
            } else if (err === "Logging in the user failed. com.google.firebase.auth.FirebaseAuthInvalidUserException: There is no user record corresponding to this identifier. The user may have been deleted.") {
                alert("Пользователь с таким Email не найден!");
            } else if (err === "Logging in the user failed. com.google.firebase.auth.FirebaseAuthInvalidCredentialsException: The email address is badly formatted.") {
                alert("Некорректный формат Email");
            } else {
                alert("Другая ошибка");
            }
        })
    }

    public logout() {
        this.backendService.token = '';
        firebase.logout();
    }

    public add(path: string, value: any) {
        console.log("Смотрим какие поля у объекта при добавлении", value);
        return firebase.push(path, value).then((res: any) => {
            return 'Item was successfully added to DB';
        }).catch((err: any) => {
            alert(err);
        })
    }

    public edit(path: string, id: string, name: string, desc: string, imagepath: string) {
        return firebase.update(path + "/" + id, {
            name: name,
            desc: desc,
            imagepath: imagepath ? imagepath : null
        }).then((res: any) => {
            console.log("Стадион успешно отредактирован");
        }).catch((err) => {
            alert(err);
        })
    }

    public delete(path, id: string) {
        return firebase.remove(path + "/" + id).catch((err) => {
            alert(err);
        });
    }

    getItemsList(path) {
        console.log("check call method. Path === ", path);
        return new Observable((observer: any) => {
            let _path = path;

            let onValueEvent = (snapshot: any) => {
                this.ngZone.run(() => {
                    let results = this.handleSnapshot(snapshot.value);
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, `/${_path}`);
        }).pipe();
    }

    getItem(id: string): Observable<any> {
        return new Observable((observer: any) => {
            observer.next(this._allItems.filter(s => s.id === id)[0]);
        }).pipe();
    }

    private handleSnapshot(data: any) {
        this._allItems = [];
        if (data) {
            for (const id in data) {
                let result = (<any>Object).assign({id: id}, data[id]);
                if (data.hasOwnProperty(id)) {
                    this._allItems.push(new Stadium(result));
                }
            }
        }
        return this._allItems;
    }
}