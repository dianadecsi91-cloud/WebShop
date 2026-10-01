import { Component } from '@angular/core';
import { Product } from '../product';
import { WebshopService } from '../webshop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  standalone: false,
  templateUrl: './delete.html',
  styleUrl: './delete.css',
})
export class Delete {
  product: Product= new Product()

  constructor(public router: Router, public service: WebshopService){

  }

  delete():void{
    this.service.delete(this.product)
    this.router.navigateByUrl("list")
  }
}
