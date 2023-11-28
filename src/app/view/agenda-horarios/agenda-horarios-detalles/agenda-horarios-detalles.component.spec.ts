import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaHorariosDetallesComponent } from './agenda-horarios-detalles.component';

describe('AgendaHorariosDetallesComponent', () => {
  let component: AgendaHorariosDetallesComponent;
  let fixture: ComponentFixture<AgendaHorariosDetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendaHorariosDetallesComponent]
    });
    fixture = TestBed.createComponent(AgendaHorariosDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
