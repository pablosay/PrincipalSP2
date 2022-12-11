import { Component, OnInit, OnDestroy } from '@angular/core';
import { publicacion, respuesta } from 'src/app/modelos/Objetos';
import { BackendService } from '../servicios/backend.service';
import { Router } from '@angular/router';
import { CompartirUsuarioService } from 'src/app/service/compartir-usuario.service';
import { SharepublicacionService } from 'src/app/service/sharepublicacion.service';
@Component({
  selector: 'app-grafitis',
  templateUrl: './grafitis.component.html',
  styleUrls: ['./grafitis.component.scss']
})
export class GrafitisComponent implements OnInit {
  publicacionesGrafiti: publicacion[];
  serverPath: string;
  constructor(private backend: BackendService, private router:Router, private shareuser: CompartirUsuarioService, private compartirP:SharepublicacionService) {
    this.serverPath = "http://localhost:3000/file/";
  }
  ngOnInit(): void {
    this.backend.publicacionesGrafitis().subscribe(respuesta => {
      this.publicacionesGrafiti = respuesta.publicaciones;
      for(let publicacion of this.publicacionesGrafiti){
        publicacion.fecha = publicacion.fecha.substring(0,10);
        if(publicacion.titulo == null)
          publicacion.titulo = "No hay titulo disponible";
        if(publicacion.descripcion == null)
          publicacion.descripcion = "No hay descripción disponible";
      }
    })
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

  ngOnDestroy(): void{
    for(let publicacion of this.publicacionesGrafiti){
      this.backend.actualizarLikes(publicacion.archivo, publicacion.likes).subscribe(respuesta => {
      });
    }
  }

  comentarios(publi:publicacion){
    this.compartirP.setPublicacion(publi, 'grafiti')
    this.router.navigateByUrl('/inicio/comentarios')
  }

}


