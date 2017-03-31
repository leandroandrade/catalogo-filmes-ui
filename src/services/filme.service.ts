import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Filme } from '../models/filme';

@Injectable()
export class FilmeService {

    private url: string = 'http://localhost:8080/catalogofilmes/resources/filmes/';

    http: Http;
    headers: Headers;

    constructor(http: Http) {
        this.http = http;

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    cadastra(filme: Filme): Observable<Response> {
        return this.http
            .post(this.url, JSON.stringify(filme), { headers: this.headers })
    }

    lista() {
        return this.http.get(this.url)
            .map(response => response.json())
    }

    remove(filme: Filme) {
        return this.http.delete(this.url + '' + filme.id);
    }

}