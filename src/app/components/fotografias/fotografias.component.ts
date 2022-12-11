import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { publicacion, respuesta } from 'src/app/modelos/Objetos';
import { CompartirUsuarioService } from 'src/app/service/compartir-usuario.service';
import { BackendService } from '../servicios/backend.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharepublicacionService } from 'src/app/service/sharepublicacion.service';

@Component({
  selector: 'app-fotografias',
  templateUrl: './fotografias.component.html',
  styleUrls: ['./fotografias.component.scss']
})
export class FotografiasComponent implements OnInit {
  publicacionesFotografia: publicacion[];
  serverPath: string;
  constructor(private backend: BackendService, private router:Router, private shareuser: CompartirUsuarioService, private fb: FormBuilder, private compartirP: SharepublicacionService) {
    this.serverPath = "http://localhost:3000/file/";
  }

  ngOnInit(): void {
    this.backend.publicacionesFotografias().subscribe(respuesta => {
      this.publicacionesFotografia = respuesta.publicaciones;
      for(let publicacion of this.publicacionesFotografia){
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
    for(let publicacion of this.publicacionesFotografia){
      this.backend.actualizarLikes(publicacion.archivo, publicacion.likes).subscribe(respuesta => {
      });
    }
  }

  comentarios(publi:publicacion){
    this.compartirP.setPublicacion(publi, 'fotografia')
    this.router.navigateByUrl('/inicio/comentarios')
  }

}
