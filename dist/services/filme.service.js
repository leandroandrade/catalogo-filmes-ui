"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var FilmeService = (function () {
    function FilmeService(http) {
        this.url = 'http://localhost:8080/catalogofilmes/resources/filmes/';
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    FilmeService.prototype.cadastra = function (filme) {
        if (filme.id) {
            // recuperar a data do form
            filme.lancamento = new Date();
            return this.http.put(this.url + '' + filme.id, JSON.stringify(filme), { headers: this.headers });
        }
        return this.http
            .post(this.url, JSON.stringify(filme), { headers: this.headers });
    };
    FilmeService.prototype.lista = function () {
        return this.http.get(this.url)
            .map(function (response) { return response.json(); });
    };
    FilmeService.prototype.remove = function (filme) {
        return this.http.delete(this.url + '' + filme.id);
    };
    FilmeService.prototype.pesquisaPeloId = function (id) {
        return this.http.get(this.url + '' + id).map(function (response) { return response.json(); });
    };
    return FilmeService;
}());
FilmeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FilmeService);
exports.FilmeService = FilmeService;
//# sourceMappingURL=filme.service.js.map