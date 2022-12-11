import { Component, OnInit } from '@angular/core';
import { BackendService } from '../servicios/backend.service';
import { UserServiceService } from '../servicios/user-service.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent implements OnInit {

  nombre:string;
  correo: string;
  edad:number;
  descripcion: string;
  fotoPath: string;
  telefono: string;
  latitud:number;
  longitud:number;
  haylocacion: boolean;

  options: any;



  constructor(private userservice: UserServiceService, private backend: BackendService) {
    this.nombre = this.userservice.usuarioIngresado.name;
    this.correo = this.userservice.usuarioIngresado.email;
    this.descripcion = "";
    this.telefono = "";
    this.edad = 0;
    this.haylocacion = false;
  }

  ngOnInit(): void {
    this.backend.informacionPerfil(this.correo).subscribe(response => {
      this.descripcion = response.usuario[0].descripcion;
      if(response.usuario[0].nacimiento == null){
        this.edad = 0;
      } else {
        this.edad = this.calcularEdad(String(response.usuario[0].nacimiento).substring(0,10));
      }
      
      this.telefono = response.usuario[0].telefono;
      if(response.usuario[0].foto == null){
        this.fotoPath = "assets/demo/images/170185.png";
      } else {
        this.fotoPath = "http://localhost:3000/bucket/images/fotosPerfil/" + response.usuario[0].foto;
      }
      if(response.usuario[0].latitud != null){
        this.haylocacion = true;
        this.latitud = response.usuario[0].latitud;
        this.longitud = response.usuario[0].longitud;
        this.options = {
          center: {lat: this.latitud, lng: this.longitud},
          zoom: 17
        };
      }
    });
  }

  calcularEdad(cumple:string):number{
    var separado = cumple.split("-");
    var dia_i = Number(separado[2]);
    var year_i = Number(separado[0]);
    var mes_i = Number(separado[1]);
    var fecha_actual = new Date();
    var dia_hoy = Number(fecha_actual.getDate());
    var mes_hoy = Number(fecha_actual.getMonth());
    var year_hoy = Number(fecha_actual.getFullYear());
    
    var months = [31, 28, 31, 30, 31, 30, 31,31, 30, 31, 30, 31 ];

    if(dia_i > dia_hoy){
      dia_hoy = dia_hoy - months[mes_i];
      mes_hoy = mes_hoy - 1; 
    }

    if(mes_i > mes_hoy){
      year_hoy = year_hoy - 1;
      mes_hoy = mes_hoy + 12;
    }
    return year_hoy - year_i;
  }

  zoomIn(map) {
    map.setZoom(map.getZoom()+1);
  }

  zoomOut(map) {
    map.setZoom(map.getZoom()-1);
  }
}
