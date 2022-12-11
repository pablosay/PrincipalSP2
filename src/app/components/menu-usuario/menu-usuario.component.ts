import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/service/app.layout.service';
@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.scss']
})
export class MenuUsuarioComponent implements OnInit {
  items: any[] = [];
  constructor(public layoutService: LayoutService) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Bienvenid@',
        items: [
          { label: 'Ver Perfil', icon: 'pi pi-fw pi-id-card', routerLink: ['/usuario/perfilUsuario']},
          { label: 'Editar perfil', icon: 'pi pi-fw pi-user-edit', routerLink: ['/usuario/editarPerfil']},
          { label: 'Subir contenido', icon: 'pi pi-fw pi-upload', routerLink: ['/usuario/contenido']},
          { label: 'Contenido', icon: 'pi pi-fw pi-briefcase', routerLink: ['/usuario/editarContenido']},
          { label: 'Pagina principal', icon: 'pi pi-fw pi-home' , routerLink: ['/']}
        ]
      }
    ];
  }

}
