
import { Injectable } from '@angular/core';
import { Produto } from '../produto/produto';

@Injectable()
export class ProdutoService {

    lastId = 0;
    produto1 = new Produto(
        1,
        25,
        Object[0],
);
produtos: Produto[] = [this.produto1];
constructor() { }


public getProdutos() {
    return this.produtos;
}

public getProdutosPorCategoria(categoria: string) {
    return this.produtos;
}

public getProdutoPorId(id: number) {
    return this.produtos;
}
}
