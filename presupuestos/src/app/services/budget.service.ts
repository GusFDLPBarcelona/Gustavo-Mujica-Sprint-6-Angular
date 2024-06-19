import { Injectable } from '@angular/core';
import { iBudget } from '../interfaces/budget.interface';
import { iExtra, iPresupuesto } from '../models/budget';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  SEO = 300;
  Ads = 400;
  Web = 500;

  montoFinal = 0;
  extras: number = 0;
  detalleExtras: iExtra = {
    cantidadIdiomas: 0,
    cantidadPaginas: 0
  };
  listaPresupuestosTotal: iPresupuesto[] = [];

  constructor() { }

  calcularPresupuesto(presupuesto: any): number {
    this.montoFinal = 0;
    if (presupuesto.SEO) {
      this.montoFinal += this.SEO;
    }
    if (presupuesto.Ads) {
      this.montoFinal += this.Ads;
    }
    if (presupuesto.Web) {
      this.montoFinal += this.Web;
    } else {
      this.extras = 0;
    }



    return this.montoFinal += this.extras;
  }

  calcularExtras(presupuesto: iExtra): number {
    this.extras = 0;
    this.detalleExtras = {
      cantidadIdiomas: presupuesto.cantidadIdiomas,
      cantidadPaginas: presupuesto.cantidadPaginas
    }

    if (presupuesto.cantidadPaginas === 1 && presupuesto.cantidadIdiomas === 1) {
      this.extras = 0;
    } else {
      this.extras = (presupuesto.cantidadPaginas * presupuesto.cantidadIdiomas * 30);
      console.log("extras", this.extras);
    }

    return this.extras;
  };

  getPrespuestos(): iPresupuesto[] {

    return this.listaPresupuestosTotal;
  }

  crearPresupuesto(presupuesto: iPresupuesto): iPresupuesto[] {
    const presupuestoGuardar: iPresupuesto = {
      servicios: presupuesto.servicios,
      usuario: {
        nombre: presupuesto.usuario.nombre,
        telefono: presupuesto.usuario.telefono,
        email: presupuesto.usuario.email
      },
      monto: presupuesto.monto,
      extras: this.detalleExtras
    }

    this.listaPresupuestosTotal.push(presupuestoGuardar);
    console.log(presupuestoGuardar);
    return [];
  }
}
