import { Component, OnInit } from '@angular/core';
import { BackendService } from '../servicios/backend.service';
import { UserServiceService } from '../servicios/user-service.service';
import { publicacion, publicacionUsuario } from 'src/app/modelos/Objetos';
import { EditarPublicacionService } from 'src/app/service/editar-publicacion.service';
import { Router } from '@angular/router';
import { SharepublicacionService } from 'src/app/service/sharepublicacion.service';
@Component({
  selector: 'app-editar-contenido',
  templateUrl: './editar-contenido.component.html',
  styleUrls: ['./editar-contenido.component.scss']
})
export class EditarContenidoComponent implements OnInit {
  publicacionesPintura: publicacionUsuario[];
  publicacionesFotografia: publicacionUsuario[];
  publicacionesGrafiti: publicacionUsuario[];
  publicacionesTattoo: publicacionUsuario[];
  publicacionesMusica: publicacionUsuario[];
  publicacionesVideo: publicacionUsuario[];
  serverPath: string;
  correo:string;
  constructor(private backend: BackendService, private userservice: UserServiceService, private editarpublicacion:EditarPublicacionService, private router:Router, private compartirP:SharepublicacionService) {
    this.correo = this.userservice.usuarioIngresado.email;
    this.serverPath = "http://localhost:3000/file/";
  }

  ngOnInit(): void {
    if(this.userservice.getUser != null){
      this.backend.datosPublicacionUsuarioCategoria(this.correo, "P").subscribe(response1 => {
        this.publicacionesPintura = response1.publicacionUsuario;
        for(let publicacionp of this.publicacionesPintura){
          publicacionp.fecha = publicacionp.fecha.substring(0,10);
          if(publicacionp.titulo == null)
            publicacionp.titulo = "No hay titulo disponible";
        }
        this.backend.datosPublicacionUsuarioCategoria(this.correo, "F").subscribe(response2 => {
          this.publicacionesFotografia = response2.publicacionUsuario;
          for(let publicacionf of this.publicacionesFotografia){
            publicacionf.fecha = publicacionf.fecha.substring(0,10);
            if(publicacionf.titulo == null)
              publicacionf.titulo = "No hay titulo disponible";
          }
          this.backend.datosPublicacionUsuarioCategoria(this.correo, "G").subscribe(response3 => {
            this.publicacionesGrafiti = response3.publicacionUsuario;
            for(let publicaciong of this.publicacionesGrafiti){
              publicaciong.fecha = publicaciong.fecha.substring(0,10);
              if(publicaciong.titulo == null)
                publicaciong.titulo = "No hay titulo disponible";
            }
            this.backend.datosPublicacionUsuarioCategoria(this.correo, "T").subscribe(response4 => {
              this.publicacionesTattoo = response4.publicacionUsuario;
              for(let publicaciont of this.publicacionesTattoo){
                publicaciont.fecha = publicaciont.fecha.substring(0,10);
                if(publicaciont.titulo == null)
                  publicaciont.titulo = "No hay titulo disponible";
              }
              this.backend.datosPublicacionUsuarioCategoria(this.correo, "M").subscribe(response5 => {
                this.publicacionesMusica = response5.publicacionUsuario;
                for(let publicacionm of this.publicacionesMusica){
                  publicacionm.fecha = publicacionm.fecha.substring(0,10);
                  if(publicacionm.titulo == null)
                    publicacionm.titulo = "No hay titulo disponible";
                }
                this.backend.datosPublicacionUsuarioCategoria(this.correo, "V").subscribe(response6 => {
                  this.publicacionesVideo = response6.publicacionUsuario;
                  for(let publicacionv of this.publicacionesVideo){
                    publicacionv.fecha = publicacionv.fecha.substring(0,10);
                    if(publicacionv.titulo == null)
                      publicacionv.titulo = "No hay titulo disponible";
                  }
                });
              });
            });
          });
        });
      });
    }
    
  }

  editar(publicacion: publicacionUsuario, tipo: string){
    this.editarpublicacion.publicacionEditar(publicacion, tipo);
    this.router.navigateByUrl("/usuario/editarPublicacion");
  }

  verComentarios(publi:publicacion, tipo:string){
    this.compartirP.setPublicacion(publi, tipo)
    this.router.navigateByUrl('/usuario/comentariosEmociones')
  }
}
