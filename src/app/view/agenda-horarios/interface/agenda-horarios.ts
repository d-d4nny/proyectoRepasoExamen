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
    entrevistador: tipoEntrevistador; // Indica el tipo de entrevistador (A o B)
    fechaCita: Date;
    horarioDisponible: horasCitas; // Horarios disponibles asociados a fechas
}

