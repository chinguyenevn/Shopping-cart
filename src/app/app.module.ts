import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartHeaderComponent } from './cart-header/cart-header.component';
import { CartBodyComponent } from './cart-body/cart-body.component';
import { CartFooterComponent } from './cart-footer/cart-footer.component';
import locateVi from '@angular/common/locales/vi';
import { registerLocaleData } from '@angular/common';
registerLocaleData(locateVi,'vi');

@NgModule({
  declarations: [
    AppComponent,
    CartHeaderComponent,
    CartBodyComponent,
    CartFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
