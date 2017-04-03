import { Component, ViewContainerRef } from '@angular/core';
import { Filme } from '../models/filme';
import { FilmeService } from '../services/filme.service';

import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

    filmes: Filme[] = [];
    service: FilmeService;
    sucesso: string = '';
    erro: string = '';

    constructor(service: FilmeService, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
        overlay.defaultViewContainer = vcRef;

        this.service = service;
        this.service.lista()
            .subscribe(filmes => {
                this.filmes = filmes
            }, error => console.log(error));
    }

    remover(filme: Filme) {
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
            .then(dialog => dialog.result)
            .then(res => this.removerFilme(filme))
            .catch(err => console.log("Ação cancelada pelo usuário"));

    }

    removerFilme(filme: Filme): void {
        this.service
            .remove(filme)
            .subscribe(() => {
                this.aplicarRemocao(filme);
                this.sucesso = 'Filme ' + filme.nome + ' removido com sucesso!';
                this.timeoutMensagemSucesso()
            }, error => {
                console.log(error);
                this.erro = 'Não foi possível remover o filme!';
                this.timeoutMensagemErro();
            })
    }

    private aplicarRemocao(filme: Filme) {
        let novosFilmes = this.filmes.slice(0);
        let indice = novosFilmes.indexOf(filme);

        novosFilmes.splice(indice, 1);
        this.filmes = novosFilmes;
    }

    private timeoutMensagemSucesso(): void {
        setTimeout(() => {
            this.sucesso = '';
        }, 4000);

    }
    private timeoutMensagemErro(): void {
        setTimeout(() => {
            this.erro = '';
        }, 4000);
    }


}

