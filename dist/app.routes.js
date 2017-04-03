"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var listagem_component_1 = require("./listagem/listagem.component");
var cadastro_filme_component_1 = require("./cadastro/cadastro-filme.component");
var appRoutes = [
    { path: '', component: listagem_component_1.ListagemComponent },
    { path: 'cadastro-filme', component: cadastro_filme_component_1.CadastroFilmeComponent },
    { path: 'cadastro-filme/:id', component: cadastro_filme_component_1.CadastroFilmeComponent },
    { path: '**', component: listagem_component_1.ListagemComponent },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map