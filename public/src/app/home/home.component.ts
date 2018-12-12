import {Component, OnInit} from '@angular/core';
import {HttpService} from "../http.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    authors: any;

    constructor(private _httpService: HttpService,
                private _router: Router) {
    }

    ngOnInit() {
        this.loadAuthors();
    }

    loadAuthors(){
        let obs = this._httpService.getAllAuthors();
        obs.subscribe((data) => {
            if (data["status"] == "success") {
                this.authors = data["data"];
            } else {
                console.log("Error getting Authors in HomeComponentComponent.ngOnInit ", data["data"]);
            }
        })
    }

    delete(id: String) {
        let obs = this._httpService.deleteAuthorById(id);
        obs.subscribe((data) => {
            if (data["status"] == "success") {
                this.loadAuthors();
            } else {
                console.log("Error in HomeComponentComponent.delete ", data["error"]);
            }
        })
    }

    add(event) {
        event.stopPropagation();
        this._router.navigate(['/new']);
        return false;
    }

    goEdit(id) {
        this._router.navigate(['/edit', id]);
    }
}
