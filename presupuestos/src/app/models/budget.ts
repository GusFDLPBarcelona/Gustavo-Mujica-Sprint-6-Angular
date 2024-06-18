export interface iPresupuesto {
    servicios: any[],
    usuario: {
        nombre: string,
        telefono: string,
        email: string
    },
    monto: number,
    extras: []
}

