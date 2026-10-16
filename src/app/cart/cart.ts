import { Component } from '@angular/core';
import { Router, RouterConfigOptions } from '@angular/router';
import { WebshopService } from '../webshop.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

  product: Product= new Product()
  constructor(public service: WebshopService){}

  Delete(i:number):void{
    this.service.cart.splice(i,1)
  }
 
}
