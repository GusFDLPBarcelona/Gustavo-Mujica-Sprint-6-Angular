import { Injectable } from '@angular/core';
import { iBudget } from '../interfaces/budget.interface';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  SEO = 300;
  Ads = 400;
  Web = 500;

  montoFinal = 0;
  extras = 0;

  constructor() { }

  calcularPresupuesto(presupuesto: any): number {
    this.montoFinal = 0;
    console.log(presupuesto);
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

  calcularExtras(presupuesto: any): number {
    this.extras = 0;
    this.extras = presupuesto.cantidadPaginas * presupuesto.cantidadIdiomas * 30;
    console.log("extras", this.extras);
    return this.extras;
  };
}
