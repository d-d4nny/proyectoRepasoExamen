type horasCitas = "10:00 a 10:30" | "10:30 a 11:00" | "11:00 a 11:30" | "11:30 a 12:00" | "12:00 a 12:30" | "12:30 a 13:00" | "13:00 a 13:30" | "13:30 a 14:00";

//Array de horas al dia que se pueden seleccionar.
export var HorasCitasSelect: string [] = [
    
    "10:00 a 10:30",
    "10:30 a 11:00",
    "11:00 a 11:30",
    "11:30 a 12:00",
    "12:00 a 12:30",
    "12:30 a 13:00",
    "13:00 a 13:30",
    "13:30 a 14:00",
];

type tipoEntrevistador = "Entrevistador A" | "Entrevistador B";

//Array de entrevistadores que se pueden seleccionar.
export var TipoEntrevistadorSelect: string [] = [
    
    "Entrevistador A",
    "Entrevistador B",
];

export interface AgendaHorario {
    id: string;
    fechaCita: Date;
    entrevistador: tipoEntrevistador; // Indica el tipo de entrevistador (A o B)
    horarioDisponible: horasCitas; // Horarios disponibles asociados a fechas
    estado: boolean;
}

// Función que devuelve una representación en cadena de los campos de la interfaz
function mostrarCampos(ag: AgendaHorario): string {
    return `Fecha: ${ag.fechaCita}, Entrevistador: ${ag.entrevistador}, Hora: ${ag.horarioDisponible}`;
  }



