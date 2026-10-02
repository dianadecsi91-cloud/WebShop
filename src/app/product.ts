import { Guid } from "guid-typescript"

export class Product {

id: string= Guid.create().toString()
name: string = ""
category: string = ""
price: number|null = null
description: string = ""
inStock: boolean = false
stock: number|null = null
image: string = ''

 getShortId(): string{
    return this.id.split('-')[0]
}
}
