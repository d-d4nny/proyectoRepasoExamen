import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaHorariosListaComponent } from './agenda-horarios-lista.component';

describe('AgendaHorariosListaComponent', () => {
  let component: AgendaHorariosListaComponent;
  let fixture: ComponentFixture<AgendaHorariosListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendaHorariosListaComponent]
    });
    fixture = TestBed.createComponent(AgendaHorariosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
