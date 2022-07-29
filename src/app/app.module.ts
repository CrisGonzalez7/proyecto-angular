import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Rutas
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AnuncioComponent } from './pages/anuncio/anuncio.component';
import { AnunciosComponent } from './pages/anuncios/anuncios.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { EntradaComponent } from './pages/entrada/entrada.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AnuncioComponent,
    AnunciosComponent,
    BlogComponent,
    HomeComponent,
    NosotrosComponent,
    ContactoComponent,
    EntradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
