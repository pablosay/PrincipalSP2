import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { publicacion } from 'src/app/modelos/Objetos';
import { MessageService } from 'primeng/api';
import { SharepublicacionService } from 'src/app/service/sharepublicacion.service';
import { BackendService } from '../servicios/backend.service';
import { comentario } from 'src/app/modelos/Objetos';
import {Location} from '@angular/common';
@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss'],
  providers: [MessageService]
})
export class ComentariosComponent implements OnInit {
  publicacion:publicacion;
  serverPath:string;
  form: FormGroup;
  tipo:string;
  fecha:string;
  comentarios: comentario[];
  constructor(private publi:SharepublicacionService, private fb:FormBuilder, private backend:BackendService, public messageService: MessageService, private _location: Location) {
    this.serverPath = "http://localhost:3000/file/";
    this.form = this.fb.group({
      correo: ['', Validators.required],
      comentario: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.publicacion = this.publi.getPublicacion()
    this.tipo = this.publi.getTipo()
    this.backend.comentarios(this.publicacion.archivo).subscribe(response => {
      this.comentarios = response.comentarios;
      for(let comentario of this.comentarios){
        comentario.fecha = comentario.fecha.substring(0,10);
      }
    });
    
    
  }

  agregar(){
    var date = new Date();
    if(date.getMonth()+1 <10){
      this.fecha  = date.getFullYear()+"-"+"0"+(date.getMonth()+1)+"-"+ date.getDate();
    } else {
      this.fecha  = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
    }
    let comentario = this.form.controls['comentario'].value;
    let correo = this.form.controls['correo'].value;
    let key = this.publicacion.archivo;
    this.backend.comentar(comentario, correo,key, this.fecha).subscribe(response => {
      if(response.status == 1){
        this.messageService.add({severity: 'success', summary: 'Comentario ingresado', detail: 'Estara disponible luego de revision'});
      }
    })
    this.form.reset()
  }

  regresar(){
    this._location.back();
  }

  

  

}
