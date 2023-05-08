import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerciciosUd34ComponentComponent } from './ejercicios-ud34-component.component';

describe('EjerciciosUd34ComponentComponent', () => {
  let component: EjerciciosUd34ComponentComponent;
  let fixture: ComponentFixture<EjerciciosUd34ComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjerciciosUd34ComponentComponent]
    });
    fixture = TestBed.createComponent(EjerciciosUd34ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
