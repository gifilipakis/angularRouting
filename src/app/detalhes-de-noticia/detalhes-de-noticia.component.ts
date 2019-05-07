import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-de-noticia',
  templateUrl: './detalhes-de-noticia.component.html',
  styleUrls: ['./detalhes-de-noticia.component.css']
})
export class DetalhesDeNoticiaComponent implements OnInit {
  noticia = null;

  constructor(private noticias: NoticiasService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.noticia = this.noticias.consulta(parseInt(id));
  }

}
