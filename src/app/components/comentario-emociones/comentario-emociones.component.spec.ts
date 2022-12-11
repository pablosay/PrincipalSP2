import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioEmocionesComponent } from './comentario-emociones.component';

describe('ComentarioEmocionesComponent', () => {
  let component: ComentarioEmocionesComponent;
  let fixture: ComponentFixture<ComentarioEmocionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioEmocionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentarioEmocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
