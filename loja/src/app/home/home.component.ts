import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  produtos = [
    {id: 1, nome: 'Adidas',preco: 239.50},
    {id: 2, nome: 'Nike',preco: 439.50},
    {id: 3, nome: 'Puma',preco: 189.50},
    {id: 4, nome: 'Keds', preco: 255.60}
  ];
  palavra: string;

  constructor() { }

  ngOnInit(): void {
  }

  adicionarProduto(idProduto: number) {
    document.getElementById('btn-done-'+idProduto)?.removeAttribute('hidden');
    document.getElementById('btn-add-'+idProduto)?.setAttribute('hidden', 'true');

  }

  verCarrinho() {
  }

  buscar(palavra: string){
    if (palavra) {
      palavra = palavra.toUpperCase();

      this.produtos = this.produtos.filter(a =>
        a.nome.toUpperCase().indexOf(palavra) >= 0
      );
    } else {
      return;
    }
  }
}
