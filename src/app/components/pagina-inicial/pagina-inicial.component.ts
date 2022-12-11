import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from 'src/app/service/app.layout.service';
import { Router } from '@angular/router';
@Component({
    selector: 'pagina-inicial',
    templateUrl: './pagina-inicial.component.html'
})
export class PaginaInicialComponent {

    items!: MenuItem[];

    constructor(public layoutService: LayoutService, private router: Router) { }

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


