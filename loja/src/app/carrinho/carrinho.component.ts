import { CarrinhoService } from './shared/carrinho.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Tenis } from './shared/tenis';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  @Input()
  carrinho: Tenis [] = [];

  @Output()
  onDeleteTenis = new EventEmitter();

  constructor(private carrinhoService: CarrinhoService){ }

  ngOnInit(): void {
    this.carrinhoService.getAll().subscribe(carrinho =>
      this.carrinho = carrinho);
  }

  removerProduto(item: Tenis){

    console.log(item._id);
    this.carrinhoService.delete(item._id).subscribe();


  }
}

