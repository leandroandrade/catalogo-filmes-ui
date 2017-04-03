"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var listagem_component_1 = require("./listagem/listagem.component");
var cadastro_filme_component_1 = require("./cadastro/cadastro-filme.component");
var forms_1 = require("@angular/forms");
var filme_service_1 = require("./services/filme.service");
var angular2_modal_1 = require("angular2-modal");
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent, listagem_component_1.ListagemComponent, cadastro_filme_component_1.CadastroFilmeComponent],
        imports: [platform_browser_1.BrowserModule, app_routes_1.routing, http_1.HttpModule, forms_1.FormsModule, forms_1.ReactiveFormsModule,
            angular2_modal_1.ModalModule.forRoot(), bootstrap_1.BootstrapModalModule],
        providers: [filme_service_1.FilmeService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map