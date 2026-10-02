import { Component } from '@angular/core';
import { Product } from '../product';
import { WebshopService } from '../webshop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  product: Product = new Product()
  cheapDiv: boolean = false

  constructor(public service: WebshopService) { }
  addToCart() { }

  Inkr(): void {
    this.service.products.sort((a, b) => Number(a.price) - Number(b.price))
  }
  Dekr(): void {
    this.service.products.sort((a, b) => Number(b.price) - Number(a.price))
  }

  cheap() {
    this.product = this.service.products.reduce((a, b) => (a.price! < b.price! ? a : b))
    this.cheapDiv = true
  }

  exp(){ 
   this.product = this.service.products.reduce((a,b) => (b.price!  > a.price! ? b : a))
   this.cheapDiv = true
 }
 back() {
  this.cheapDiv = false
}
  
}
