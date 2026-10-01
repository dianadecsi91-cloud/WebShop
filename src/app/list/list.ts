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

  constructor(public service: WebshopService){

  }
  addToCart(){}

  Inkr(): void {
  this.service.products = [...this.service.products].sort((a,b) => Number(a.price) - Number(b.price))
}

Dekr(): void {
  this.service.products = [...this.service.products].sort((a,b) => Number(b.price) - Number(a.price))
}
  
  
}
