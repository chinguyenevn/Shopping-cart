import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html'})
  
export class CartHeaderComponent implements OnInit {
numberItems: number =30;
  constructor() { }

  ngOnInit() {
  }

}
