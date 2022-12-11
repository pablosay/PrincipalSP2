import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { publicacionUsuario } from '../modelos/Objetos';

@Injectable({
  providedIn: 'root'
})
export class EditarPublicacionService {
  publicacion:publicacionUsuario;
  tipo:string;
  constructor() {

  }

  publicacionEditar(publicacion: publicacionUsuario, tipo:string){
    this.publicacion = publicacion;
    this.tipo = tipo;
  }
}
