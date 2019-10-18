import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-footer',
  templateUrl: './cart-footer.component.html'
})
export class CartFooterComponent implements OnInit {
numbersubtotal: number = 1000000;
numbertax: number = 10000;
numbertotal: number = 12000;
  constructor() { 

  }

  ngOnInit() {
  }

}
