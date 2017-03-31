import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

import { ListagemComponent } from './listagem/listagem.component';
import { CadastroFilmeComponent } from './cadastro/cadastro-filme.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FilmeService } from './services/filme.service';

@NgModule({
    declarations: [AppComponent, ListagemComponent, CadastroFilmeComponent],
    imports: [BrowserModule, routing, HttpModule, FormsModule, ReactiveFormsModule],
    providers: [FilmeService],
    bootstrap: [AppComponent]
})
export class AppModule {

}