import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaHorariosComponent } from './agenda-horarios.component';

describe('AgendaHorariosComponent', () => {
  let component: AgendaHorariosComponent;
  let fixture: ComponentFixture<AgendaHorariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendaHorariosComponent]
    });
    fixture = TestBed.createComponent(AgendaHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
