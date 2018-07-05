import {Injectable} from "@angular/core";
import {FirebaseService} from "~/services/firebase.service";
import {Stadium} from "~/modules/stadiums/classes/stadium";

@Injectable()
export class StadiumService {
    constructor(private firebaseService: FirebaseService) {}

    addStadium(path: string, stadium: Stadium) {
        return this.firebaseService.add(path, stadium);
    }
}