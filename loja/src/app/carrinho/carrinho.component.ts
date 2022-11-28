import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  produtos = [
    {id: 1, nome: 'Adidas',preco: 239.50},
    {id: 2, nome: 'Nike',preco: 439.50}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  removerProduto(idProduto: number){
    this.produtos.find((x) => {
     this.produtos.splice(x.id, idProduto)
    });
  }
}
