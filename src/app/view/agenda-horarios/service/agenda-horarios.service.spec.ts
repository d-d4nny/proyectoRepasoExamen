import { TestBed } from '@angular/core/testing';

import { AgendaHorariosService } from './agenda-horarios.service';

describe('AgendaHorariosService', () => {
  let service: AgendaHorariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendaHorariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
