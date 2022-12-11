import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  desplegarPinturas(){
    this.router.navigateByUrl("/inicio/pintura");
  }
  desplegarFotografias(){
    this.router.navigateByUrl("/inicio/fotografia");
  }
  desplegarGrafitis(){
    this.router.navigateByUrl("/inicio/grafiti");
  }
  desplegarTatuajes(){
    this.router.navigateByUrl("/inicio/tatuajes");
  }
  desplegarMusica(){
    this.router.navigateByUrl("/inicio/musica");
  }
  desplegarVideos(){
    this.router.navigateByUrl("/inicio/videos");
  }
}
