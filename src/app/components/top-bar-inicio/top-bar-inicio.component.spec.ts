import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarInicioComponent } from './top-bar-inicio.component';

describe('TopBarInicioComponent', () => {
  let component: TopBarInicioComponent;
  let fixture: ComponentFixture<TopBarInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBarInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
