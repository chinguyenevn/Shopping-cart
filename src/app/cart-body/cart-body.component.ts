import { Component, OnInit } from '@angular/core';

import{Product} from '../product.model';

  
@Component({
  selector: 'app-cart-body',
  templateUrl: './cart-body.component.html'
})
export class CartBodyComponent implements OnInit {
products: Product[]=[
  {
    id:1,
    name: 'Lenovo',
    description: 'description 1',
    image: 'https://cdn.nguyenkimmall.com/images/thumbnails/123/100/detailed/596/10042317_MTXT_ASUS_A512FA-EJ571T-I3-4-256-W10_01.jpg',
    price: 100000,
    quantity: 1
  },
  {
    id:2,
    name: 'Macbook',
    description: 'description 2',
    image: 'https://cdn.nguyenkimmall.com/images/thumbnails/123/100/detailed/596/10042317_MTXT_ASUS_A512FA-EJ571T-I3-4-256-W10_01.jpg',
    price: 2000000,
    quantity: 2
  }
]
removeproduct(id: number){
  const index = this.products.findIndex(Product=>Product.id==id);
  (index ==-1)
    this.products.splice(index,1);
} 

  constructor() { }

  ngOnInit() {
  }

}
