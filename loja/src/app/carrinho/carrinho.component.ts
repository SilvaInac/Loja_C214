import { CarrinhoService } from './shared/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Tenis } from './shared/tenis';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  carrinho: Tenis [] = [];

  constructor(private carrinhoService: CarrinhoService){ }

  ngOnInit(): void {
    this.carrinhoService.getByCart().subscribe(carrinho =>
      this.carrinho = carrinho);
  }

  removerProduto(carrinho: Tenis){
    if(carrinho){
      const index = this.carrinho.findIndex((carrinhoItem)=> carrinhoItem._id == carrinho._id)
      this.carrinho.splice(index,1)
    }
  }
}

