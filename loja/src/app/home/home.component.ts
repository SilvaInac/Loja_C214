
import { CarrinhoService } from './../carrinho/shared/carrinho.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Tenis } from '../carrinho/shared/tenis';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tenis: Array<Tenis> = [
    {_id: '1', name: 'Puma', price: '189.90'},
    {_id: '2',name: 'Nike Air Force', price: '399.90'},
    {_id: '3',name: 'Nike Jordan', price: '590.90'},
    {_id: '4',name: 'Adidas SuperStar', price: '279.90'},
    {_id: '5',name: 'Converse', price: '229.90'},
    {_id: '6',name: 'Vans', price: '189.90'},
    {_id: '7',name: 'Keds', price: '179.90'},
  ];

  carrinho: Tenis = new Tenis();

  palavra: string;

  constructor(
    private carrinhoService: CarrinhoService
  ){}

  ngOnInit(): void {}

  adicionarProduto(produto: Tenis) {
    document.getElementById('btn-done-'+produto._id)?.removeAttribute('hidden');
    document.getElementById('btn-add-'+produto._id)?.setAttribute('hidden', 'true');

    this.carrinhoService.save(produto).subscribe();
    console.log(produto);
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
