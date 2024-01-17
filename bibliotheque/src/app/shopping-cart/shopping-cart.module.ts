import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { CardsComponent } from './cards/cards.component';
import { PanierComponent } from './panier/panier.component';


@NgModule({
  declarations: [
    EcommerceComponent,
    CardsComponent,
    PanierComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule
  ]
})
export class ShoppingCartModule { }
