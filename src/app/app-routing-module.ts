import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { List } from './list/list';
import { Cart } from './cart/cart';
import { Create } from './create/create';
import { Delete } from './delete/delete';
import { DescriptionProduct } from './description-product/description-product';

const routes: Routes = [
  { path: "cart", component: Cart },
  { path: "list", component: List },
  { path: "create", component: Create},
  { path: "delete", component: Delete},
  { path: "descriptionProduct", component: DescriptionProduct},
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "**", redirectTo: "list", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
