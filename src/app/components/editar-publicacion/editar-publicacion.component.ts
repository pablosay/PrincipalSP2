import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { publicacionUsuario } from 'src/app/modelos/Objetos';
import { EditarPublicacionService } from 'src/app/service/editar-publicacion.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { BackendService } from '../servicios/backend.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-editar-publicacion',
  templateUrl: './editar-publicacion.component.html',
  styleUrls: ['./editar-publicacion.component.scss'],
  providers: [MessageService]
})
export class EditarPublicacionComponent implements OnInit {
  publicacion: publicacionUsuario;
  serverPath: string;
  correo:string;
  tipo:string;
  form: FormGroup;
  constructor(private editarpublicacion: EditarPublicacionService, private fb: FormBuilder, private backend: BackendService, public messageService: MessageService) {
    this.serverPath = "http://localhost:3000/file/";
    this.form = this.fb.group({
      titulo: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.publicacion = this.editarpublicacion.publicacion;
    this.tipo = this.editarpublicacion.tipo;
  }

  actualizar(){
    this.backend.cambiarTitulo(this.form.controls['titulo'].value, this.publicacion.archivo).subscribe(response => {
      if(response.status == 1){
        this.messageService.add({severity: 'success', summary: 'Titulo actualizado', detail: ''});
      }
    })
  }
}
