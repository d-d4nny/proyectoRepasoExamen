import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasDetallesComponent } from './citas-detalles.component';

describe('CitasDetallesComponent', () => {
  let component: CitasDetallesComponent;
  let fixture: ComponentFixture<CitasDetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitasDetallesComponent]
    });
    fixture = TestBed.createComponent(CitasDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
