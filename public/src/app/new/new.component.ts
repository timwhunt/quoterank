import {Component, OnInit} from '@angular/core';
import {HttpService} from "../http.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

    author: any;
    errorMsg = {};

    constructor(private _httpService: HttpService,
                private _router: Router) {
    }

    ngOnInit() {
        this.author = {name: ""};
    }

    goHome(event){
        event.stopPropagation();
        this._router.navigate(['/']);
        return false;
    }

    submitNew() {
        let obs = this._httpService.newAuthor(this.author);
        obs.subscribe((data) => {
            if(data["status"] == "success") {
                this._router.navigate(['/']);
            } else {
                this.errorMsg = data["error"].errors;
            }
        })
    }
}
