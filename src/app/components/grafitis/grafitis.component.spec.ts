import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafitisComponent } from './grafitis.component';

describe('GrafitisComponent', () => {
  let component: GrafitisComponent;
  let fixture: ComponentFixture<GrafitisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrafitisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrafitisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
