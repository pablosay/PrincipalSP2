import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from 'src/app/modelos/Response';
import { environment } from 'src/environments/environment';
import { comentarios, respuestaPerfil, respuestaPublicacion, respuestaPublicacionUsuario, publicacionesDeUnUsuario, artistas, numeroDePublicacionesPorCategoria, numeroDeComentariosPorArtista, listaArtistas, listaResultadoLikes, listaResultadoNumeroPublicaciones, listaResultadoComentarios} from 'src/app/modelos/Objetos';
const BackEndApi = environment.urlBackend;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  RegisterOrIgnore(usuario: string, nombre: string){
    let url:string = BackEndApi + "/RegistrarUsuario/" + usuario + "/nombre/"+nombre;
    return this.http.post<Response>(url, httpOptions);
  }

  informacionPerfil(usuario:string){
    let url:string = BackEndApi + "/informacionUsuario/" + usuario;
    return this.http.get<respuestaPerfil>(url, httpOptions);
  }

  actualizarInformacionPersonal(correo:string, telefono: string, descripcion:string ,nacimiento: string){
    let url:string = BackEndApi + "/actualizarDatosPersonales/usuario/"+ correo + "/telefono/"+ telefono +"/descripcion/"+ descripcion +"/nacimiento/" + nacimiento;
    return this.http.put<Response>(url, httpOptions);
  }

  actualizarLocacion(correo:string,latitud:number, longitud:number){
    let url: string = BackEndApi + "/actualizarLocacion/correo/"+correo+"/latitud/" + latitud + "/longitud/" + longitud;
    return this.http.put<Response>(url,httpOptions);
  }

  datosPublicacionUsuarioCategoria(correo:string, categoria:string){
    let url:string = BackEndApi + "/infoPublicacionUsuario/"+correo + "/categorias/" + categoria;
    return this.http.get<respuestaPublicacionUsuario>(url, httpOptions);
  }

  publicacionesFotografias(){
    let url:string = BackEndApi + "/fotografias";
    return this.http.get<respuestaPublicacion>(url, httpOptions);
  }

  publicacionesPinturas(){
    let url:string = BackEndApi + "/pinturas";
    return this.http.get<respuestaPublicacion>(url, httpOptions);
  }

  publicacionesGrafitis(){
    let url:string = BackEndApi + "/grafitis";
    return this.http.get<respuestaPublicacion>(url, httpOptions);
  }

  publicacionesTatuajes(){
    let url:string = BackEndApi + "/tatuajes";
    return this.http.get<respuestaPublicacion>(url, httpOptions);
  }

  publicacionesMusica(){
    let url:string = BackEndApi + "/musica";
    return this.http.get<respuestaPublicacion>(url, httpOptions);
  }

  publicacionesVideos(){
    let url:string = BackEndApi + "/videos";
    return this.http.get<respuestaPublicacion>(url, httpOptions);
  }

  cambiarTitulo(titulo:string, archivo:string){
    let url:string = BackEndApi + "/cambiarTitulo/titulo/" + titulo + "/archivo/" + archivo;
    return this.http.put<Response>(url, httpOptions);
  }

  actualizarLikes(archivo:string, likes:number){
    let url:string = BackEndApi + "/actualizarLikes/likes/" + likes +"/archivo/" + archivo;
    return this.http.put<Response>(url, httpOptions);
  }

  comentar(comentario:string,correo:string,archivo:string,fecha:string){
    let url:string = BackEndApi+"/comentar/"+comentario+"/usuario/"+correo+"/archivo/"+archivo+"/fecha/"+fecha;
    return this.http.post<Response>(url, httpOptions);
  }

  comentarios(archivo:string){
    let url:string = BackEndApi + "/comentarios/"+archivo;
    return this.http.get<comentarios>(url,httpOptions);
  }

  obtenerPublicacionesDeUnUsuario(usuario:string){
    let url:string = BackEndApi + "/publicaciones/usuario/"+usuario;
    return this.http.get<publicacionesDeUnUsuario>(url, httpOptions);
  }

  obtenerArtistas(){
    let url:string = BackEndApi + "/artistas";
    return this.http.get<listaArtistas>(url, httpOptions);
  }

  obtenerNumeroPublicaciones(usuario:string, categoria:string){
    let url:string = BackEndApi + "/cantidadPublicaciones/"+usuario+"/categoria/"+categoria;
    return this.http.get<listaResultadoNumeroPublicaciones>(url, httpOptions);
  }

  obtenerNumeroDeLikesArtista(usuario:string){
    let url:string = BackEndApi + "/cantidadDeLikes/"+usuario;
    return this.http.get<listaResultadoLikes>(url, httpOptions);
  }

  obtenerNumeroDeComentarios(usuario:string){
    let url:string = BackEndApi + "/cantidadDeComentarios/"+usuario;
    return this.http.get<listaResultadoComentarios>(url, httpOptions);
  }

}
