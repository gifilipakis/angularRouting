import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDeNoticiasComponent } from './lista-de-noticias/lista-de-noticias.component';
import { DetalhesDeNoticiaComponent } from './detalhes-de-noticia/detalhes-de-noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeNoticiasComponent,
    DetalhesDeNoticiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
