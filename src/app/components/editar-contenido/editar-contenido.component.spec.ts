import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarContenidoComponent } from './editar-contenido.component';

describe('EditarContenidoComponent', () => {
  let component: EditarContenidoComponent;
  let fixture: ComponentFixture<EditarContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarContenidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
