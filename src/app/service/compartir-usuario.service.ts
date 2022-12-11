import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CompartirUsuarioService {
  user:string;
  nombre:string;
  componente:string;
  constructor() { }
  setUsuario(usuario: string, nombre:string, componente:string){
    this.user = usuario;
    this.nombre = nombre;
    this.componente = componente;
  }
}
