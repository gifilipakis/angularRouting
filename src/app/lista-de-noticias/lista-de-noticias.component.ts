import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-lista-de-noticias',
  templateUrl: './lista-de-noticias.component.html',
  styleUrls: ['./lista-de-noticias.component.css']
})
export class ListaDeNoticiasComponent implements OnInit {

  constructor(private noticias: NoticiasService) { }
    
  ngOnInit() {

  }

}
