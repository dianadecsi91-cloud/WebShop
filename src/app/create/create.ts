import { Component } from '@angular/core';
import { WebshopService } from '../webshop.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {
product: Product= new Product()

constructor(public router: Router, public service: WebshopService){
 
}
create():void{
  this.service.create(this.product)
  this.router.navigateByUrl("list")
}

 

  }

