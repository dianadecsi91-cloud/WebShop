import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { List } from './list/list';
import { Nav } from './nav/nav';
import { Cart } from './cart/cart';
import { Create } from './create/create';
import { Delete } from './delete/delete';
import { FormsModule } from '@angular/forms';
import { Footer } from './footer/footer';

@NgModule({
  declarations: [App, List, Nav, Cart, Create, Delete, Footer],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
