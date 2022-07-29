import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { NosotrosComponent } from "./pages/nosotros/nosotros.component";
import { AnunciosComponent } from './pages/anuncios/anuncios.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AnuncioComponent } from './pages/anuncio/anuncio.component';

const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'anuncios', component: AnunciosComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'anuncio', component: AnuncioComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}