import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from "./home/home.component";
import {EditComponent} from "./edit/edit.component";
import {NewComponent} from "./new/new.component";

import {HttpService} from "./http.service";
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesNewComponent } from './quotes-new/quotes-new.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NewComponent,
        EditComponent,
        QuotesComponent,
        QuotesNewComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [HttpService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
