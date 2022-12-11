import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuChangeEvent } from 'src/app/api/menuchangeevent';
@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  private menuSource = new Subject<MenuChangeEvent>();
  private resetSource = new Subject();

  menuSource$ = this.menuSource.asObservable();
  resetSource$ = this.resetSource.asObservable();

  onMenuStateChange(event: MenuChangeEvent) {
    this.menuSource.next(event);
  }

  reset() {
    this.resetSource.next(true);
  }
}
