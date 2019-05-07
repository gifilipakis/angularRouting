import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  lista = [
    {
      id: 1,
      titulo:'Temer vira réu pela sexta vez, agora por organização criminosa e obstrução de Justiça',
    },
    {
      id: 2,
      titulo:'Bolsonaro diz que não há divisão entre militares e olavistas no governo',
    }
  ];
  constructor() { }

  todas(){
    return this.lista
  }

  consulta(id){
    return this.lista.find(noticia => noticia.id === id);
  }
}
