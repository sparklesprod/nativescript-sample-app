import {Injectable} from "@angular/core";
import {Router, CanActivate} from "@angular/router";
import {BackendService} from "~/services/backend.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,
                private backendService: BackendService) {}

    canActivate() {
        if (this.backendService.isLoggedIn()) {
            return true;
        } else {
            console.log("redirect [AuthGuard]");
            this.router.navigate(['/login']);
            return false;
        }
    }
}