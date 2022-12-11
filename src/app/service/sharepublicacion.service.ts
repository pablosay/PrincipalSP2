import { Injectable } from '@angular/core';
import { publicacion } from '../modelos/Objetos';

@Injectable({
  providedIn: 'root'
})
export class SharepublicacionService {
  publicacion:publicacion;
  tipo: string;
  constructor() { }

  setPublicacion(publi:publicacion, tipoo:string){
    this.publicacion = publi
    this.tipo = tipoo
  }

  getPublicacion(){
    return this.publicacion;
  }

  getTipo(){
    return this.tipo;
  }
}
