import { Component } from '@angular/core';
import { Filme } from '../models/filme';
import { Trailer } from '../models/trailer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FilmeService } from '../services/filme.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cadastro-filme',
    templateUrl: './cadastro-filme.component.html'
})
export class CadastroFilmeComponent {

    filme: Filme = new Filme();
    formulario: FormGroup;
    service: FilmeService;
    router: Router;

    sucesso: string = '';
    erro: string = '';

    constructor(service: FilmeService, formularioBuilder: FormBuilder, activateRoute: ActivatedRoute, router: Router) {
        this.service = service;
        this.router = router;

        activateRoute.params.subscribe(params => {
            let id = params['id'];
            if (id) {
                this.service
                    .pesquisaPeloId(id)
                    .subscribe(filme => this.filme = filme);
            }
        });


        this.formulario = formularioBuilder.group({
            nome: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            sinopse: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            lancamento: [],
            link: []
        });
    }

    cadastrar(event): void {
        event.preventDefault();

        this.service
            .cadastra(this.filme)
            .subscribe(response => {
                this.limpar();

                if (this.isEdicao(response)) {
                    this.router.navigate([''])
                }

                this.sucesso = 'Cadastro realizado com sucesso!';
                this.timeoutMensagemSucesso();
            }, error => {
                this.erro = 'Não foi possível cadastar o filme!';
                this.timeoutMensagemErro();
                console.log('Erro ao inserir o filme: ' + error.status)

            });
    }

    private limpar(): void {
        this.filme = new Filme();
    }

    // Corrigir bug quando adicionamos um trailer 
    // na lista de clicamos em um novo trailer
    novoTrailer(event): void {
        event.preventDefault();

        let novosTrailers = this.filme.trailers;
        novosTrailers.push(new Trailer());
        this.filme.trailers = novosTrailers;
    }

    removerTrailer(event, indice): void {
        event.preventDefault();

        let novosTrailers = this.filme.trailers;
        novosTrailers.splice(indice, 1);
        this.filme.trailers = novosTrailers;
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

    private isEdicao(response): boolean {
        return response.status == 200;
    }



}