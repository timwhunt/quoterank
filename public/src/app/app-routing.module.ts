import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {EditComponent} from "./edit/edit.component";
import {NewComponent} from "./new/new.component";
import {HomeComponent} from "./home/home.component";
import {QuotesComponent} from "./quotes/quotes.component";
import {QuotesNewComponent} from "./quotes-new/quotes-new.component";

const routes: Routes = [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: 'edit/:id', component: EditComponent},
    {path: 'new', component: NewComponent},
    {path: 'quotes/:id', component: QuotesComponent},
    {path: 'quotesnew/:id', component: QuotesNewComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
