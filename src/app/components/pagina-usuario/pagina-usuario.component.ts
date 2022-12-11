import { Component, OnInit } from '@angular/core';
import { SocialUser } from "@abacritt/angularx-social-login";
import { UserServiceService } from '../servicios/user-service.service';
import { LayoutService } from 'src/app/service/app.layout.service';
@Component({
  selector: 'app-pagina-usuario',
  templateUrl: './pagina-usuario.component.html',
  styleUrls: ['./pagina-usuario.component.scss']
})
export class PaginaUsuarioComponent implements OnInit {

  usuario: SocialUser;

  constructor(private userservice:UserServiceService, public layoutService: LayoutService ) {}

  ngOnInit(): void {
    this.usuario = this.userservice.getUser();
  }

  get containerClass() {
    return {
        'layout-theme-light': this.layoutService.config.colorScheme === 'light',
        'layout-theme-dark': this.layoutService.config.colorScheme === 'dark',
        'layout-overlay': this.layoutService.config.menuMode === 'overlay',
        'layout-static': this.layoutService.config.menuMode === 'static',
        'layout-slim': this.layoutService.config.menuMode === 'slim',
        'layout-horizontal': this.layoutService.config.menuMode === 'horizontal',
        'layout-static-inactive': this.layoutService.state.staticMenuDesktopInactive && this.layoutService.config.menuMode === 'static',
        'layout-overlay-active': this.layoutService.state.overlayMenuActive,
        'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
        'p-input-filled': this.layoutService.config.inputStyle === 'filled',
        'p-ripple-disabled': !this.layoutService.config.ripple
    }
  }
}
