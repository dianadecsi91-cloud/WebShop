import { Component } from '@angular/core';
import { WebshopService } from '../webshop.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit {
  product: Product = new Product()
  content: boolean = false

  constructor(public router: Router, public service: WebshopService) { }

  edit(item: Product) {
    this.product = item
    this.content = true
    this.service.edit(this.product)
    this.router.navigateByUrl("edit")
   
  }
  save() {
    this.service.save()
    this.router.navigateByUrl("list")
  }
  addToCart() { }
}
