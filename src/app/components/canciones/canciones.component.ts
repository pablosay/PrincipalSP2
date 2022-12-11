import { Component, OnInit, OnDestroy } from '@angular/core';
import { publicacion} from 'src/app/modelos/Objetos';
import { BackendService } from '../servicios/backend.service';
import { Router } from '@angular/router';
import { CompartirUsuarioService } from 'src/app/service/compartir-usuario.service';
import { SharepublicacionService } from 'src/app/service/sharepublicacion.service';
@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements OnInit {
  publicacionesMusica: publicacion[];
  serverPath: string;
  constructor(private backend: BackendService, private shareuser: CompartirUsuarioService, private router:Router, private compartirP:SharepublicacionService) {
    this.serverPath = "http://localhost:3000/file/";
  }

  ngOnInit(): void {
    this.backend.publicacionesMusica().subscribe(respuesta => {
      this.publicacionesMusica = respuesta.publicaciones;
      for(let publicacion of this.publicacionesMusica){
        publicacion.fecha = publicacion.fecha.substring(0,10);
        if(publicacion.titulo == null)
          publicacion.titulo = "No hay titulo disponible";
        if(publicacion.descripcion == null)
          publicacion.descripcion = "No hay descripción disponible";
      }
    })
  }

  ngOnDestroy(): void{
    for(let publicacion of this.publicacionesMusica){
      this.backend.actualizarLikes(publicacion.archivo, publicacion.likes).subscribe(respuesta => {
      });
    }
  }

  verPerfil(usuario:string, nombre:string, dedondevengo:string){
    this.router.navigateByUrl('/inicio/infoUsuario');
    this.shareuser.setUsuario(usuario, nombre,dedondevengo);
  }

  handleChange(e, publicacion: publicacion) {
    if(e.checked){
      publicacion.likes++
    } else {
      publicacion.likes--
    }
  }

  comentarios(publi:publicacion){
    this.compartirP.setPublicacion(publi, 'musica')
    this.router.navigateByUrl('/inicio/comentarios')
  }

}
