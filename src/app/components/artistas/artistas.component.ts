import { Component, OnInit } from '@angular/core';
import { BackendService } from '../servicios/backend.service';
import { artista } from 'src/app/modelos/Objetos';
import { Router } from '@angular/router';
import { CompartirUsuarioService } from 'src/app/service/compartir-usuario.service';
@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.scss']
})
export class ArtistasComponent implements OnInit {
  artistas:artista[] = [];
  constructor(private backend:BackendService, private router:Router, private shareuser:CompartirUsuarioService) { }

  ngOnInit(): void {
    this.backend.obtenerArtistas().subscribe(response => {
      let listDeArtistas = response.artistas;
      for (let index = 0; index < listDeArtistas.length; index++) {
        const correo = listDeArtistas[index].correo;
        const nombre = listDeArtistas[index].nombre;
        let foto = "";
        if(listDeArtistas[index].foto == null){
          foto = "assets/demo/images/170185.png";
        } else {
          foto = "http://localhost:3000/bucket/images/fotosPerfil/" + listDeArtistas[index].foto;
        }
        this.backend.obtenerNumeroPublicaciones(correo, "P").subscribe(respuestaP => {
          let numeroP = respuestaP.listaNumeroPublicacion[0].numero;
          let p = "";
          if(numeroP != 0){
            p = "Pintor";
          } 
          this.backend.obtenerNumeroPublicaciones(correo, "F").subscribe(respuestaF => {
            let numeroF = respuestaF.listaNumeroPublicacion[0].numero;
            let f = "";
            if(numeroF == 0){
              f = "";
            } else {
              f = "Fotografo";
            }            
            this.backend.obtenerNumeroPublicaciones(correo, "T").subscribe(respuestaT => {
              let numeroT = respuestaT.listaNumeroPublicacion[0].numero;
              let t = "";
              if(numeroT != 0){
                t = "Tatuador";
              }  
              this.backend.obtenerNumeroPublicaciones(correo, "M").subscribe(respuestaM => {
                let numeroM = respuestaM.listaNumeroPublicacion[0].numero;
                let m = "";
                if(numeroM != 0){
                  m = "Musico";
                } 
                this.backend.obtenerNumeroPublicaciones(correo, "V").subscribe(respuestaV => {
                  let numeroV = respuestaV.listaNumeroPublicacion[0].numero;
                  let v = "";
                  if(numeroV != 0){
                    v = "Audio Visual";
                  }
                  this.backend.obtenerNumeroPublicaciones(correo, "G").subscribe(respuestaG => {
                    let numeroG = respuestaG.listaNumeroPublicacion[0].numero;
                    let g = "";
                    if(numeroG != 0){
                      g = "Grafitero";
                    }
                    this.backend.obtenerNumeroDeComentarios(correo).subscribe(respuestaComentarios => {
                      let comentarios = respuestaComentarios.listaNumeroComentarios[0].numero;
                      this.backend.obtenerNumeroDeLikesArtista(correo).subscribe(respuestaLikes => {
                        let lk = respuestaLikes.listaLikes[0].numero;
                        let art = new artista(correo,nombre,foto,lk,comentarios,f, p, m, v, g,t);
                        this.artistas.push(art);
                      })
                    })
                  })
                })
              })
            })
          })
        })
      }

      
      
    })
  }

  verPerfil(usuario:string, nombre:string){
    this.router.navigateByUrl('/inicio/infoUsuario');
    this.shareuser.setUsuario(usuario, nombre, "");
  }

}
