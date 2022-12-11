import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BackendService } from '../servicios/backend.service';
import { UserServiceService } from '../servicios/user-service.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-editar-perfil-usuario',
  templateUrl: './editar-perfil-usuario.component.html',
  styleUrls: ['./editar-perfil-usuario.component.scss'],
  providers: [MessageService]
})
export class EditarPerfilUsuarioComponent implements OnInit {

  uploadedFiles: any[] = [];
  editarPerfilForm: FormGroup;
  locacionForm: FormGroup;
  correo: string;
  serverUrl: string;
  constructor(public messageService: MessageService, private fb: FormBuilder, private backend: BackendService, private userservice: UserServiceService, private datePipe: DatePipe) {
    this.editarPerfilForm = this.fb.group({
      telefono: ['', Validators.required],
      nacimiento: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
    this.locacionForm = this.fb.group({
      latitud: [, Validators.required],
      longitud: [, Validators.required]
    });
    this.correo = userservice.usuarioIngresado.email;
    this.serverUrl = "http://localhost:3000/bucket/images/fotosPerfil/correo/"+this.correo;
  }

  ngOnInit(): void {
  }

  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
    this.messageService.add({severity: 'info', summary: 'Foto de perfil actualizada', detail: ''});
}

  actualizarPerfil(){
    let telefono:string = this.editarPerfilForm.controls['telefono'].value;
    let nacimiento:string = this.editarPerfilForm.controls['nacimiento'].value;
    nacimiento = this.datePipe.transform(nacimiento, 'yyyy-MM-dd');
    let descripcion:string = this.editarPerfilForm.controls['descripcion'].value;
    this.backend.actualizarInformacionPersonal(this.userservice.usuarioIngresado.email ,telefono, descripcion, nacimiento).subscribe(response => {
      if(response.status == 1){
        this.messageService.add({severity:'success', summary: 'Se actualizaron sus datos', detail:''});
      } else {
        this.messageService.add({severity:'error', summary: 'Error en el servidor', detail:response.message});
      }
    });
    this.editarPerfilForm.reset();
  }

  actualizarLocacion(){
    let latitud:number = this.locacionForm.controls['latitud'].value;
    let longitud:number = this.locacionForm.controls['longitud'].value;
    this.backend.actualizarLocacion(this.userservice.usuarioIngresado.email,latitud,longitud).subscribe(response => {
      if(response.status == 1){
        this.messageService.add({severity:'success', summary: 'Se actualizaron sus datos', detail:''});
      } else {
        this.messageService.add({severity:'error', summary: 'Error en el servidor', detail:response.message});
      }
    });
    this.locacionForm.reset();
  }



}
