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
var filme_1 = require("../models/filme");
var trailer_1 = require("../models/trailer");
var forms_1 = require("@angular/forms");
var filme_service_1 = require("../services/filme.service");
var router_1 = require("@angular/router");
var CadastroFilmeComponent = (function () {
    function CadastroFilmeComponent(service, formularioBuilder, activateRoute, router) {
        var _this = this;
        this.filme = new filme_1.Filme();
        this.sucesso = '';
        this.erro = '';
        this.service = service;
        this.router = router;
        activateRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.service
                    .pesquisaPeloId(id)
                    .subscribe(function (filme) { return _this.filme = filme; });
            }
        });
        this.formulario = formularioBuilder.group({
            nome: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(2)])],
            sinopse: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(2)])],
            lancamento: [],
            link: []
        });
    }
    CadastroFilmeComponent.prototype.cadastrar = function (event) {
        var _this = this;
        event.preventDefault();
        this.service
            .cadastra(this.filme)
            .subscribe(function (response) {
            _this.limpar();
            if (_this.isEdicao(response)) {
                _this.router.navigate(['']);
            }
            _this.sucesso = 'Cadastro realizado com sucesso!';
            _this.timeoutMensagemSucesso();
        }, function (error) {
            _this.erro = 'Não foi possível cadastar o filme!';
            _this.timeoutMensagemErro();
            console.log('Erro ao inserir o filme: ' + error.status);
        });
    };
    CadastroFilmeComponent.prototype.limpar = function () {
        this.filme = new filme_1.Filme();
    };
    // Corrigir bug quando adicionamos um trailer 
    // na lista de clicamos em um novo trailer
    CadastroFilmeComponent.prototype.novoTrailer = function (event) {
        event.preventDefault();
        var novosTrailers = this.filme.trailers;
        novosTrailers.push(new trailer_1.Trailer());
        this.filme.trailers = novosTrailers;
    };
    CadastroFilmeComponent.prototype.removerTrailer = function (event, indice) {
        event.preventDefault();
        var novosTrailers = this.filme.trailers;
        novosTrailers.splice(indice, 1);
        this.filme.trailers = novosTrailers;
    };
    CadastroFilmeComponent.prototype.timeoutMensagemSucesso = function () {
        var _this = this;
        setTimeout(function () {
            _this.sucesso = '';
        }, 4000);
    };
    CadastroFilmeComponent.prototype.timeoutMensagemErro = function () {
        var _this = this;
        setTimeout(function () {
            _this.erro = '';
        }, 4000);
    };
    CadastroFilmeComponent.prototype.isEdicao = function (response) {
        return response.status == 200;
    };
    return CadastroFilmeComponent;
}());
CadastroFilmeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cadastro-filme',
        templateUrl: './cadastro-filme.component.html'
    }),
    __metadata("design:paramtypes", [filme_service_1.FilmeService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
], CadastroFilmeComponent);
exports.CadastroFilmeComponent = CadastroFilmeComponent;
//# sourceMappingURL=cadastro-filme.component.js.map