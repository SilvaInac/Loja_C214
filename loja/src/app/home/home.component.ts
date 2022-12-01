
import { CarrinhoService } from './../carrinho/shared/carrinho.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Tenis } from '../carrinho/shared/tenis';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tenis: Tenis[] = [];

  palavra: string;

  constructor(
    private carrinhoService: CarrinhoService
  ){}

  ngOnInit(): void {
    this.carrinhoService.getAll().subscribe(carrinho =>
      this.tenis = carrinho)
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

      this.tenis = this.tenis.filter(a =>
        a.name.toUpperCase().indexOf(palavra) >= 0
      );
    } else {
      return;
    }
  }
}
