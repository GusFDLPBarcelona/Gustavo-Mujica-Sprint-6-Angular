export interface iPresupuesto {
    servicios: any[],
    usuario: {
        nombre: string,
        telefono: string,
        email: string,
        fecha: Date
    },
    monto: number,
    extras: iExtra
}

export interface iExtra {
    cantidadIdiomas: number,
    cantidadPaginas: number
}

