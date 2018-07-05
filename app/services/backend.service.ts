import {Injectable} from "@angular/core";
import {setString, getString} from "tns-core-modules/application-settings";

const tokenKey = 'token';

@Injectable()
export class BackendService {

    public isLoggedIn(): boolean {
        return !!getString('token');
    }

    public get token(): string {
        return getString('token');
    }

    public set token(theToken: string) {
        setString('token', theToken);
    }
}