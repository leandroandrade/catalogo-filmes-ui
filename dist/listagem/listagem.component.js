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
var core_1 = require("@angular/core");
var filme_service_1 = require("../services/filme.service");
var angular2_modal_1 = require("angular2-modal");
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var ListagemComponent = (function () {
    function ListagemComponent(service, overlay, vcRef, modal) {
        var _this = this;
        this.modal = modal;
        this.filmes = [];
        this.sucesso = '';
        this.erro = '';
        overlay.defaultViewContainer = vcRef;
        this.service = service;
        this.service.lista()
            .subscribe(function (filmes) {
            _this.filmes = filmes;
        }, function (error) { return console.log(error); });
    }
    ListagemComponent.prototype.remover = function (filme) {
        var _this = this;
        this.modal.confirm()
            .size('sm')
            .isBlocking(true)
            .showClose(true)
            .keyboard(27)
            .title('Exclusão de filme')
            .body('Deseja excluir o filme?')
            .okBtn('Sim')
            .cancelBtn('Não')
            .open()
            .then(function (dialog) { return dialog.result; })
            .then(function (res) { return _this.removerFilme(filme); })
            .catch(function (err) { return console.log("Ação cancelada pelo usuário"); });
    };
    ListagemComponent.prototype.removerFilme = function (filme) {
        var _this = this;
        this.service
            .remove(filme)
            .subscribe(function () {
            _this.aplicarRemocao(filme);
            _this.sucesso = 'Filme ' + filme.nome + ' removido com sucesso!';
            _this.timeoutMensagemSucesso();
        }, function (error) {
            console.log(error);
            _this.erro = 'Não foi possível remover o filme!';
            _this.timeoutMensagemErro();
        });
    };
    ListagemComponent.prototype.aplicarRemocao = function (filme) {
        var novosFilmes = this.filmes.slice(0);
        var indice = novosFilmes.indexOf(filme);
        novosFilmes.splice(indice, 1);
        this.filmes = novosFilmes;
    };
    ListagemComponent.prototype.timeoutMensagemSucesso = function () {
        var _this = this;
        setTimeout(function () {
            _this.sucesso = '';
        }, 4000);
    };
    ListagemComponent.prototype.timeoutMensagemErro = function () {
        var _this = this;
        setTimeout(function () {
            _this.erro = '';
        }, 4000);
    };
    return ListagemComponent;
}());
ListagemComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'listagem',
        templateUrl: './listagem.component.html'
    }),
    __metadata("design:paramtypes", [filme_service_1.FilmeService, angular2_modal_1.Overlay, core_1.ViewContainerRef, bootstrap_1.Modal])
], ListagemComponent);
exports.ListagemComponent = ListagemComponent;
//# sourceMappingURL=listagem.component.js.map