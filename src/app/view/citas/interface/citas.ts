import { Clientes } from '../../clientes/interface/clientes';
import { AgendaHorario } from '../../agenda-horarios/interface/agenda-horarios';

// Interfaz Cita con día, hora y selección de entrevistador
export interface Cita {
    id: string;
    idCliente: string;
    idAgendaHorario: string;
}
