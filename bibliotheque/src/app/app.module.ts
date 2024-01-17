import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuteursModule } from './auteurs/auteurs.module';
import { SpecialitesModule } from './specialites/specialites.module';
import { LivresModule } from './livres/livres.module';
import { EditeursModule } from './editeurs/editeurs.module';
import { AuthentificationModule } from './authentification/authentification.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { NavbarModule } from './navbar/navbar.module';
import { MenuComponent } from './navbar/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuteursModule,
    SpecialitesModule,
    LivresModule,
    EditeursModule,
    AuthentificationModule,
    ShoppingCartModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
