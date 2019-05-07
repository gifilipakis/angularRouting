import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaDeNoticiasComponent } from './lista-de-noticias/lista-de-noticias.component';
import { DetalhesDeNoticiaComponent } from './detalhes-de-noticia/detalhes-de-noticia.component';


const routes: Routes = [
  {path: 'noticias', component: ListaDeNoticiasComponent},
  {path: 'noticias/:id', component: DetalhesDeNoticiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }