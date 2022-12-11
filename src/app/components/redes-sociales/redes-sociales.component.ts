import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { InstagramService } from 'src/app/service/instagram.service';
@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.scss'],
  providers: [MessageService]
})
export class RedesSocialesComponent implements OnInit {
  ingresado:boolean;
  usuario:string;
  password:string;
  instaurl:string;
  form: FormGroup;
  constructor(public messageService: MessageService, private instagram: InstagramService ,private fb:FormBuilder) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.ingresado = true;
  }

  ngOnInit(): void {
    this.ingresado = !this.instagram.obtenerEstado()
  }

  ingresar() {
    let user = this.form.controls['usuario'].value;
    let pass = this.form.controls['password'].value;
    this.instagram.ingresar(user,pass);
    this.form.reset();
    this.ingresado = false;
    this.messageService.add({severity: 'info', summary: 'Se ingresaron sus datos', detail: ''});
  }

}
