import { RouterModule, Routes } from '@angular/router';
import {ListagemComponent} from './listagem/listagem.component'
import {CadastroFilmeComponent} from './cadastro/cadastro-filme.component';

const appRoutes: Routes = [
    { path: '', component: ListagemComponent },
    { path: 'cadastro-filme', component: CadastroFilmeComponent },
    { path: '**', component: ListagemComponent },
];

export const routing = RouterModule.forRoot(appRoutes);

