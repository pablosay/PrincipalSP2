
import { Component, OnInit , OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { publicacion, publicacionDeUnUsuario, usuario } from 'src/app/modelos/Objetos';
import { CompartirUsuarioService } from 'src/app/service/compartir-usuario.service';
import { BackendService } from '../servicios/backend.service';
import { SharepublicacionService } from 'src/app/service/sharepublicacion.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.scss']
})
export class InfoUsuarioComponent implements OnInit {
  usuario:usuario;
  nombre:string;
  fotoPath:string;
  haylocacion: boolean;
  options: any;
  publicaciones: publicacionDeUnUsuario[];
  serverPath: string;
  constructor(private backend: BackendService, private usershare:CompartirUsuarioService, private router:Router, private compartirP: SharepublicacionService, private _location: Location) {
    this.serverPath = "http://localhost:3000/file/";
  }

  ngOnInit(): void {
    this.nombre = this.usershare.nombre;
    this.backend.informacionPerfil(this.usershare.user).subscribe(response => {
      this.usuario = response.usuario[0];
      if(this.usuario.foto == null){
        this.fotoPath = "assets/demo/images/170185.png";
      } else {
        this.fotoPath = "http://localhost:3000/bucket/images/fotosPerfil/" + this.usuario.foto;
      }
      if(this.usuario.nacimiento != null){
        this.usuario.nacimiento = String(this.calcularEdad(this.usuario.nacimiento.substring(0,10)));
      } else {
        this.usuario.nacimiento = "N/A";
      }

      if(this.usuario.latitud != null){
        this.haylocacion = true;
        this.options = {
          center: {lat: this.usuario.latitud, lng: this.usuario.longitud},
          zoom: 17
        };
      }
      this.backend.obtenerPublicacionesDeUnUsuario(this.usershare.user).subscribe(response2 => {
        this.publicaciones = response2.publicacionesDeUnUsuario;
        for(let publicacion of this.publicaciones){
          publicacion.fecha = publicacion.fecha.substring(0,10);
          if(publicacion.titulo == null)
            publicacion.titulo = "No hay titulo disponible";
          if(publicacion.descripcion == null)
            publicacion.descripcion = "No hay descripción disponible";
        }
      })
    })
  }

  calcularEdad(cumple:string):number{
    var separado = cumple.split("-");
    var dia_i = Number(separado[2]);
    var year_i = Number(separado[0]);
    var mes_i = Number(separado[1]);
    var fecha_actual = new Date();
    var dia_hoy = Number(fecha_actual.getDate());
    var mes_hoy = Number(fecha_actual.getMonth());
    var year_hoy = Number(fecha_actual.getFullYear());
    
    var months = [31, 28, 31, 30, 31, 30, 31,31, 30, 31, 30, 31 ];

    if(dia_i > dia_hoy){
      dia_hoy = dia_hoy - months[mes_i];
      mes_hoy = mes_hoy - 1; 
    }

    if(mes_i > mes_hoy){
      year_hoy = year_hoy - 1;
      mes_hoy = mes_hoy + 12;
    }
    return year_hoy - year_i;
  }

  zoomIn(map) {
    map.setZoom(map.getZoom()+1);
  }

  zoomOut(map) {
    map.setZoom(map.getZoom()-1);
  }

  regresar(){
    this._location.back()  
  }

  donar(){
    this.router.navigateByUrl('/inicio/donacion')
  }

  ngOnDestroy(): void{
    for(let publicacion of this.publicaciones){
      this.backend.actualizarLikes(publicacion.archivo, publicacion.likes).subscribe(respuesta => {
      });
    }
  }

  comentarios(publi:publicacionDeUnUsuario){
    let post = new publicacion(this.usuario.correo, this.nombre, publi.titulo, publi.descripcion,publi.archivo,publi.fecha,publi.likes)
    this.compartirP.setPublicacion(post, 'fotografia')
    this.router.navigateByUrl('/inicio/comentarios')
  }
}
