import { Injectable } from '@angular/core';
import { SocialUser, GoogleLoginProvider } from "@abacritt/angularx-social-login";
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  usuarioIngresado: SocialUser;
  loggedIn: boolean; 
  constructor() { 
    this.loggedIn = false;
    this.usuarioIngresado = null;
  }

  seIngreso(user: SocialUser){
    this.usuarioIngresado = user;
    this.loggedIn = true;
  }

  estaIngresado(){
    return this.loggedIn;
  }

  getUser(){
    return this.usuarioIngresado;
  }

  

}
