import { Component, ViewChild } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { PanierComponent } from '../panier/panier.component';
import { AuthService } from 'src/app/authentification/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.css'
})
export class EcommerceComponent {
  title = 'bibliotheque';
  constructor(public authService: AuthService, private router: Router) {}
  changeRoute(route: string) {
    this.router.navigate([route]);
  }
  
logout() {
this.authService.doLogout();
this.router.navigate(['/login']);

}
  public collapsed = true;
orderFinished = false;
@ViewChild('productsC')
productsC: CardsComponent;
@ViewChild('shoppingCartC')
shoppingCartC: PanierComponent;

toggleCollapsed(): void {
this.collapsed = !this.collapsed;
}
finishOrder(orderFinished: any) {
this.orderFinished = orderFinished;
}
reset() {
this.orderFinished = false;
}

}
