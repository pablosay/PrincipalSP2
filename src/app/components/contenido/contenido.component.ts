import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserServiceService } from '../servicios/user-service.service';
import { DatePipe } from '@angular/common';
import { InstagramService } from 'src/app/service/instagram.service';
@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss'],
  providers: [MessageService]
})
export class ContenidoComponent implements OnInit {
  correo: string;

  serverUrlPintura: string;
  serverUrlFotografia: string;
  serverUrlGrafiti: string;
  serverUrlTattoo: string;

  serverUrlAudio: string;
  serverUrlVideo: string;

  fecha:string;
  constructor(public messageService: MessageService, private userservice: UserServiceService, private instagram: InstagramService) {
  }

  ngOnInit(): void {
    var date = new Date();
    this.correo = this.userservice.usuarioIngresado.email;
    if(date.getMonth()+1 <10){
      this.fecha  = date.getFullYear()+"-"+"0"+(date.getMonth()+1)+"-"+ date.getDate();
    } else {
      this.fecha  = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
    }
    if(this.instagram.obtenerEstado()){
      alert(this.instagram.obtenerUsuario())
      this.serverUrlPintura = "http://localhost:3000/bucket/images/pintura/correo/" + this.correo + "/fecha/" + this.fecha + "/user/" + this.instagram.obtenerUsuario() + "/password/" + this.instagram.obtenerPassword(); 
      this.serverUrlFotografia = "http://localhost:3000/bucket/images/fotografia/correo/" + this.correo + "/fecha/" + this.fecha + "/user/" + this.instagram.obtenerUsuario() + "/password/" + this.instagram.obtenerPassword();
      this.serverUrlGrafiti = "http://localhost:3000/bucket/images/grafiti/correo/" + this.correo + "/fecha/" + this.fecha + "/user/" + this.instagram.obtenerUsuario() + "/password/" + this.instagram.obtenerPassword();
      this.serverUrlTattoo = "http://localhost:3000/bucket/images/tattoo/correo/" + this.correo + "/fecha/" + this.fecha + "/user/" + this.instagram.obtenerUsuario() + "/password/" + this.instagram.obtenerPassword();
    } else {
      this.serverUrlPintura = "http://localhost:3000/bucket/images/pintura/correo/" + this.correo + "/fecha/" + this.fecha; 
      this.serverUrlFotografia = "http://localhost:3000/bucket/images/fotografia/correo/" + this.correo + "/fecha/" + this.fecha;
      this.serverUrlGrafiti = "http://localhost:3000/bucket/images/grafiti/correo/" + this.correo + "/fecha/" + this.fecha;
      this.serverUrlTattoo = "http://localhost:3000/bucket/images/tattoo/correo/" + this.correo + "/fecha/" + this.fecha;
    }
    this.serverUrlAudio = "http://localhost:3000/bucket/audios/correo/" + this.correo + "/fecha/" + this.fecha;
    this.serverUrlVideo = "http://localhost:3000/bucket/videos/correo/" + this.correo + "/fecha/" + this.fecha;
  }

  uploadedFilesPintura: any[] = [];
  uploadedFilesMusica: any[] = [];
  uploadedFilesGrafiti: any[] = [];
  uploadedFilesVideo: any[] = [];
  uploadedFilesFotografia: any[] = [];
  uploadedFilesTattoo: any[] = [];

  onUploadPintura(event) {
    for(let file of event.files) {
      this.uploadedFilesPintura.push(file);
    }
    this.messageService.add({severity: 'info', summary: 'Foto de pintura registrada', detail: 'Estara disponible luego de revision'});
  }

  onUploadMusica(event) {
    for(let file of event.files) {
        this.uploadedFilesMusica.push(file);
    }
    this.messageService.add({severity: 'info', summary: 'Cancion registrada', detail: 'Estara disponible luego de revision'});
  }

  onUploadGrafiti(event) {
    for(let file of event.files) {
        this.uploadedFilesGrafiti.push(file);
    }
    this.messageService.add({severity: 'info', summary: 'Foto de grafiti registrada', detail: 'Estara disponible luego de revision'});
  }

  onUploadVideo(event) {
    for(let file of event.files) {
        this.uploadedFilesVideo.push(file);
    }
    this.messageService.add({severity: 'info', summary: 'Video registrado', detail: 'Estara disponible luego de revision'});
  }

  onUploadFotografia(event) {
    for(let file of event.files) {
        this.uploadedFilesFotografia.push(file);
    }
    this.messageService.add({severity: 'info', summary: 'Foto registrada', detail: 'Estara disponible luego de revision'});
  }

  onUploadTattoo(event) {
    for(let file of event.files) {
        this.uploadedFilesTattoo.push(file);
    }
    this.messageService.add({severity: 'info', summary: 'Foto de tattoo registrada', detail: 'Estara disponible luego de revision'});
  }

}
