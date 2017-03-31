import { Trailer } from '../models/trailer';

export class Filme {

    id: string;
    nome: string;
    sinopse: string;
    lancamento: Date = new Date();

    trailers: Trailer[] = [];
}