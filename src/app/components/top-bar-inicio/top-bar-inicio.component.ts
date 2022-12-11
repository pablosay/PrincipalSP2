import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from 'src/app/service/app.layout.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-top-bar-inicio',
  templateUrl: './top-bar-inicio.component.html',
  styleUrls: ['./top-bar-inicio.component.scss']
})
export class TopBarInicioComponent implements OnInit {

  items!: MenuItem[];
  hayingresado: boolean;
  constructor(public layoutService: LayoutService, private router: Router) { 
  }

  ngOnInit(): void {
    
  }

  desplegarInicioSesion(){
    this.router.navigateByUrl('/inicio/inicio-sesion');
  }

  desplegarInfo(){
    this.router.navigateByUrl('/inicio/info');
  }

  desplegarArtistas(){
    this.router.navigateByUrl('/inicio/artistas')
  }
}
