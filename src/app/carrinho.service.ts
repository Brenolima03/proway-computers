import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos/produtos';

@Injectable({
    providedIn: 'root'
})
export class CarrinhoService {

    itens: IProdutoCarrinho[] = [];

    constructor() { }

    obterCarrinho() {
        const carrinho = localStorage.getItem("carrinho");
        if (carrinho) {
            this.itens = JSON.parse(carrinho);
        }
        return this.itens;
    }

    adicionarAoCarrinho(produto: IProdutoCarrinho) {
        this.itens.push(produto);
        localStorage.setItem("carrinho", JSON.stringify(this.itens));
    }

    removerProdutoCarrinho(produtoId: number) {
        this.itens = this.itens.filter(item => item.id !== produtoId);
        localStorage.setItem("carrinho", JSON.stringify(this.itens));
    }

    limparCarrinho() {
        this.itens = [];
        localStorage.removeItem("carrinho");
    }

}
