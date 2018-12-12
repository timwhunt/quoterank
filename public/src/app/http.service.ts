import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) {
    }

    getAllAuthors() {
        return this._http.get('/api/authors');
    }

    newAuthor(author) {
        return this._http.post('/api/authors', author);
    }

    getAuthorById(id: String) {
        return this._http.get('/api/authors/' + id);
    }

    updateAuthor(author) {
        return this._http.put('/api/authors', author);
    }

    deleteAuthorById(id: String) {
        return this._http.delete('/api/authors/' + id);
    }

    vote(authorId: String, quoteId: String, votes: Number){
        return this._http.put('/api/authors/' + authorId + '/quotes',{_id: quoteId, votes: votes});
    }

    deleteVote(authorId: String, quoteId: String){
        return this._http.delete('/api/authors/' + authorId + '/quotes/' + quoteId);
    }

    newQuote(authorId: String, quote){
        return this._http.post('/api/authors/' + authorId + '/quotes', quote);
    }
}
