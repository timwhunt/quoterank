import {Component, OnInit} from '@angular/core';
import {HttpService} from "../http.service";
import {ActivatedRoute, Params, Router} from "@angular/router";


@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    author: any;
    errorMsg: String = "";

    constructor(private _httpService: HttpService,
                private _router: Router,
                private _route: ActivatedRoute) {
    }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            let id =  params['id'];
            console.log("Got id in EditCompoentComponet.ngOnInit " + id);
            let obs = this._httpService.getAuthorById(id);
            obs.subscribe((data)=> {
                if (data["status"] == "success"){
                    console.log("Got author in EditCompoentComponet.ngOnInit ", data["data"]);
                    this.author = {name: data["data"].name, _id: data["data"]._id};
                } else {
                    console.log("Error author in EditCompoentComponet.ngOnInit ", data["error"]);
                }
            })

        });
    }
    goHome(event){
        event.stopPropagation();
        this._router.navigate(['/']);
        return false;
    }

    submitEdit() {
        let obs = this._httpService.updateAuthor(this.author);
        obs.subscribe((data) => {
            if(data["status"] == "success") {
                this._router.navigate(['/']);
            } else {
                this.errorMsg = data["error"].message;
                console.log("Error in EditCompoentComponet.submitEdit ", data["error"]);
            }
        })
    }


}
