import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {HttpService} from "../http.service";

@Component({
    selector: 'app-quotes-new',
    templateUrl: './quotes-new.component.html',
    styleUrls: ['./quotes-new.component.css']
})
export class QuotesNewComponent implements OnInit {

    author: any;
    newQuote = {quote:"", votes:0};
    errMsg = {};
    constructor(private _httpService: HttpService,
                private _route: ActivatedRoute,
                private _router: Router) {
    }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            let obs = this._httpService.getAuthorById(params['id']);
            obs.subscribe((data) => {
                if (data['status'] == "success") {
                    this.author = data['data'];
                } else {
                    console.log("Error getting author in QuoteNewComponent.ngOnInit", data['data']);
                }
            })
        })
    }

    submitNewQuote(){
        let obs = this._httpService.newQuote(this.author._id, this.newQuote);
        obs.subscribe((data) => {
            if (data['status'] == "success") {
                this._router.navigate(['/quotes', this.author._id]);
            } else {
                this.errMsg = data['error'].errors.quotes.errors;
            }
        })
    }

}
