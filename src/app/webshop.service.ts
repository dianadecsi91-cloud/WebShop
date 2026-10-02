import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class WebshopService {
  products: Product[] = []
  

  constructor() {
  this.read()
  }

  save() { localStorage.setItem("product_DB", JSON.stringify(this.products)) }

  read() {
    let jsonArray = JSON.parse(localStorage.getItem("product_DB") ?? "[]")
    this.products = Object.values(jsonArray).map(x => Object.assign(new Product(), x))
    if (this.products.length === 0) {
      this.seed();
    }
  }
  create(product: Product) {
    this.products.push(product)
    this.save()
  }
  delete(product: Product){
    this.products = this.products.filter(x=> x.name !== product.name)
    this.save()
  }
  edit(product: Product){
    let idx= this.products.findIndex(x => x.id !== product.id)
    this.products [idx]= product
    this.save()
  }
   
  seed(): void {
    let p = new Product()
    p.id = "7f2c9a1e-3b45-4d91-8a6f-12e9c5b0a841"
    p.name = "Bluetooth Speaker"
    p.category = "Electronics"
    p.price = 12990
    p.description = "Portable Bluetooth speaker with strong battery for outdoor and indoor use."
    p.inStock = true
    p.stock = 12
    image: 'bt.jpg'
    this.products.push(p)

    p = new Product()
    p.id = "b3a8d6f4-91c2-4e7a-9f35-6d0b2c8a71e4"
    p.name = "Wireless Mouse"
    p.category = "Electronics"
    p.price = 7990
    p.description = "Ergonomic wireless mouse for daily office use."
    p.inStock = true
    p.stock = 25
    this.products.push(p)

    p = new Product()
    p.id = "e91f4b2c-6a73-4d8e-b0f5-24c7a9e1d302"
    p.name = "Power Bank"
    p.category = "Electronics"
    p.price = 18990
    p.description = "High-capacity power bank with fast charging support for phones and tablets."
    p.inStock = true
    p.stock = 8
    this.products.push(p)

    p = new Product()
    p.id = "4c7b8e19-2d5f-43a6-9c0e-81f3a7d62b95"
    p.name = "USB-C Charging Cable"
    p.category = "Electronics"
    p.price = 2990
    p.description = "Two-meter USB-C cable for charging and data transfer."
    p.inStock = false
    p.stock = 0
    this.products.push(p)

    p = new Product()
    p.id = "a6d3e8f1-9b42-4c75-8f10-37e2c6a4b901"
    p.name = "Notebook"
    p.category = "Office Supplies"
    p.price = 1490
    p.description = "Hardcover lined notebook for studying, work, and daily note-taking."
    p.inStock = true
    p.stock = 40
    this.products.push(p)

    p = new Product()
    p.id = "f2e7c9a5-0d84-4b31-9e6a-75c1d3f8b240"
    p.name = "Pen Set"
    p.category = "Office Supplies"
    p.price = 2490
    p.description = "Three-color pen set with blue, black, and red pens."
    p.inStock = true
    p.stock = 18
    this.products.push(p)

    p = new Product()
    p.id = "9c1a5f7e-8d32-46b4-ae90-2f6c7d1b3a85"
    p.name = "Desk Organizer"
    p.category = "Office Supplies"
    p.price = 3990
    p.description = "Practical desk organizer for pens, notes, and small office supplies."
    p.inStock = true
    p.stock = 6
    this.products.push(p)

    p = new Product()
    p.id = "d84f3a6b-1c72-4e95-b0a8-64f2c9e7d315"
    p.name = "Yoga Mat"
    p.category = "Sports"
    p.price = 8990
    p.description = "Non-slip yoga mat for home workouts, stretching, and relaxation."
    p.inStock = true
    p.stock = 9
    this.products.push(p)

    p = new Product()
    p.id = "5b7e2c91-6f34-4a80-9d2e-18c7f3a6b045"
    p.name = "Sports Water Bottle"
    p.category = "Sports"
    p.price = 3990
    p.description = "Stainless steel water bottle for sports, hiking, and daily use."
    p.inStock = true
    p.stock = 15
    this.products.push(p)

    p = new Product()
    p.id = "c6f1a8d3-2b94-47e0-8c5a-91d7e3f2b608"
    p.name = "Running Belt"
    p.category = "Sports"
    p.price = 4990
    p.description = "Lightweight running belt for phone, keys, and small personal items."
    p.inStock = false
    p.stock = 0
    this.products.push(p)

    p = new Product()
    p.id = "1e9c4b7a-83f5-4d62-a0c9-35b8e1f7d204"
    p.name = "LED Desk Lamp"
    p.category = "Home"
    p.price = 11990
    p.description = "Modern LED desk lamp with adjustable brightness and tiltable head."
    p.inStock = true
    p.stock = 5
    this.products.push(p)

    p = new Product()
    p.id = "8a3d6f2c-7b91-4e45-9f0a-62c5d8e1b374"
    p.name = "Decorative Pillow"
    p.category = "Home"
    p.price = 5990
    p.description = "Soft decorative pillow for living room, bedroom, or reading nook."
    p.inStock = true
    p.stock = 3
    this.products.push(p)

    p = new Product()
    p.id = "3f7b1c9e-5a84-42d6-b0e7-19c4a8f2d935"
    p.name = "Robot Vacuum"
    p.category = "Home"
    p.price = 24990
    p.description = "Basic model robot vacuum for daily cleaning of smaller apartments."
    p.inStock = true
    p.stock = 4
    this.products.push(p)

    p = new Product()
    p.id = "6d2e9a4f-0c75-48b1-9f3a-84e7c1d5b206"
    p.name = "Frying Pan"
    p.category = "Kitchen"
    p.price = 6990
    p.description = "Stainless steel frying pan with non-stick coating for daily cooking."
    p.inStock = true
    p.stock = 10
    this.products.push(p)

    p = new Product()
    p.id = "b9e4c7a1-3f62-4d85-a0b9-27c6e1f8d340"
    p.name = "Digital Kitchen Scale"
    p.category = "Kitchen"
    p.price = 3490
    p.description = "Accurate digital kitchen scale with an easy-to-read display."
    p.inStock = true
    p.stock = 7
    this.products.push(p)

    p = new Product()
    p.id = "0f8c3a7d-91e5-4b62-8a0c-53d2f7e9b184"
    p.name = "Blender"
    p.category = "Kitchen"
    p.price = 15990
    p.description = "Multi-speed blender with a glass jar for smoothies and cream soups."
    p.inStock = false
    p.stock = 0
    this.products.push(p)
  }
}
