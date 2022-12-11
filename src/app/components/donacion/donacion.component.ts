import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-donacion',
  templateUrl: './donacion.component.html',
  styleUrls: ['./donacion.component.scss']
})
export class DonacionComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  donar(){
    alert("Haz donado al creador")
  }

  regresar(){
    this._location.back();
  }

}
