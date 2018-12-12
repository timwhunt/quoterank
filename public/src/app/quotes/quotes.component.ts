import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {HttpService} from "../http.service";

@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.component.html',
    styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

    author: any;
    constructor(private _httpService: HttpService,
                private _route: ActivatedRoute) {
    }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            let id = params['id'];
            let obs = this._httpService.getAuthorById(id);
            obs.subscribe((data)=> {
                if (data['status'] == "success") {
                    this.author = data['data'];
                }
            })
        })
    }

    vote(quote, change) {
        let obs = this._httpService.vote(this.author._id, quote._id, quote.votes + change);
        obs.subscribe((data) => {
            if (data['status'] == "success"){
                quote.votes += change;
            } else {
                console.log("Error placing vote", data['error']);
            }
        })
    }

    delete(quote){
        let obs = this._httpService.deleteVote(this.author._id, quote._id);
        obs.subscribe((data) => {
            if (data['status'] == "success"){
                this.author.quotes.splice(this.author.quotes.indexOf(quote),1);
            }
        })

    }

}
