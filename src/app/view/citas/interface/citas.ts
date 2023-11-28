import { Clientes } from '../../clientes/interface/clientes';
import { AgendaHorario } from '../../agenda-horarios/interface/agenda-horarios';

// Interfaz Cita con día, hora y selección de entrevistador
export interface Cita {
    id: string;
    cliente: Clientes;
    entrevistador: AgendaHorario;
    fecha: string; // Puedes usar un formato específico de fecha aquí (ejemplo: "2023-11-28")
    horario: ;
    // Otros campos de la cita
}
