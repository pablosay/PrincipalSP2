import { Component, OnInit } from '@angular/core';
import { publicacion } from 'src/app/modelos/Objetos';
import { SharepublicacionService } from 'src/app/service/sharepublicacion.service';
import { BackendService } from '../servicios/backend.service';
import { comentario } from 'src/app/modelos/Objetos';
@Component({
  selector: 'app-comentario-emociones',
  templateUrl: './comentario-emociones.component.html',
  styleUrls: ['./comentario-emociones.component.scss']
})
export class ComentarioEmocionesComponent implements OnInit {
  publica:publicacion;
  serverPath:string;
  tipo:string;
  comentarios: comentario[];
  pieOptions: any;
  textColor: any;
  sentimiento: string;
  constructor(private publi:SharepublicacionService, private backend:BackendService) {
    this.serverPath = "http://localhost:3000/file/";
    let documentStyle = getComputedStyle(document.documentElement);
    this.textColor = documentStyle.getPropertyValue('--text-color');
  }

  ngOnInit(): void {
    this.publica = this.publi.getPublicacion()
    this.tipo = this.publi.getTipo()
    this.backend.comentarios(this.publica.archivo).subscribe(response => {
      this.comentarios = response.comentarios;
      for(let comentario of this.comentarios){
        comentario.fecha = comentario.fecha.substring(0,10);
        comentario.alegria = comentario.alegria*100;
        comentario.enojo = comentario.enojo*100;
        comentario.disgusto = comentario.disgusto*100;
        comentario.miedo = comentario.miedo*100;
        comentario.neutral = comentario.neutral*100;
        comentario.tristeza = comentario.tristeza*100;
        comentario.sorpresa = comentario.sorpresa*100;
      }
      let alegria = 0;
    let enojo = 0;
    let disgusto = 0;
    let miedo = 0;
    let neutral = 0;
    let tristeza = 0;
    let sorpresa = 0;
    for(let comentario of this.comentarios){
      alegria = alegria + comentario.alegria;
      enojo = enojo + comentario.enojo;
      disgusto = disgusto + comentario.disgusto
      miedo = miedo + comentario.miedo
      neutral = neutral + comentario.neutral
      tristeza = tristeza + comentario.tristeza
      sorpresa = sorpresa + comentario.sorpresa
    }
    if(alegria > enojo && alegria> disgusto && alegria > miedo && alegria > neutral && alegria > tristeza && alegria > sorpresa){
      this.sentimiento = "Alegria";
    }
    if(enojo > alegria && enojo> disgusto && enojo > miedo && enojo > neutral && enojo > tristeza && enojo > sorpresa){
      this.sentimiento = "Enojo";
    }
    if(disgusto > alegria && disgusto> enojo && disgusto > miedo && disgusto > neutral && disgusto > tristeza && disgusto > sorpresa){
      this.sentimiento = "Disgusto";
    }
    if(miedo > alegria && miedo> enojo && miedo > disgusto && miedo > neutral && miedo > tristeza && miedo > sorpresa){
      this.sentimiento = "Miedo";
    }
    if(neutral > enojo && neutral> disgusto && neutral > miedo && neutral > alegria && neutral > tristeza && neutral > sorpresa){
      this.sentimiento = "Neutral";
    }
    if(tristeza > enojo && tristeza> disgusto && tristeza > miedo && tristeza > neutral && tristeza > alegria && tristeza > sorpresa){
      this.sentimiento = "Tristeza";
    }
    if(sorpresa > enojo && sorpresa> disgusto && sorpresa > miedo && sorpresa > neutral && sorpresa > tristeza && sorpresa > alegria){
      this.sentimiento = "Sorpresa";
    }
    });
    
    this.pieOptions = {
      plugins: {
          legend: {
              labels: {
                  usePointStyle: true,
                  color: this.textColor,
              }
          }
      }
    };
  }

}
