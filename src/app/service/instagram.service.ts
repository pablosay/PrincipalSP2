import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  ingresado: boolean;
  usuario: string;
  password: string;
  constructor() {
    this.ingresado = false;
  }

  ingresar(usuario: string, password:string){
    this.usuario = usuario;
    this.password = password;
    this.ingresado = true;
  }

  obtenerUsuario(){
    return this.usuario;
  }

  obtenerPassword(){
    return this.password;
  }

  obtenerEstado(){
    return this.ingresado;
  }

}
