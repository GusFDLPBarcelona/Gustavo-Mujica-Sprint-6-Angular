import { Component, Input, signal } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { iPresupuesto } from '../models/budget';

@Component({
  selector: 'app-budget-list',
  standalone: true,
  imports: [],
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.css'
})
export class BudgetListComponent {


  SEO = 0;
  ADS = 1;
  WEB = 2;

  userPresupuestos: iPresupuesto[] = [];


  constructor(private budgetService: BudgetService) { }

  presupuestosList = signal(this.userPresupuestos);

  ngOnInit(): void {
    this.userPresupuestos = this.budgetService.getPrespuestos();
    console.log(this.userPresupuestos);
  }
  ordenarPorNombre(): void {
    const arrayOrdenado = this.userPresupuestos.sort((a, b) => {
      if (a.usuario.nombre < b.usuario.nombre) {
        return -1;
      }
      if (a.usuario.nombre > b.usuario.nombre) {
        return 1;
      }
      return 0;
    });
    this.userPresupuestos = arrayOrdenado;

  }

  ordenarPorTelefono(): void {
    const arrayOrdenado = this.userPresupuestos.sort((a, b) => {
      if (a.usuario.telefono < b.usuario.telefono) {
        return -1;
      }
      if (a.usuario.telefono > b.usuario.telefono) {
        return 1;
      }
      return 0;
    });
    this.userPresupuestos = arrayOrdenado;

  }

  ordenarPorMonto(): void {
    const arrayOrdenado = this.userPresupuestos.sort((a, b) => {
      if (a.monto < b.monto) {
        return -1;
      }
      if (a.monto > b.monto) {
        return 1;
      }
      return 0;
    });
    this.userPresupuestos = arrayOrdenado;
  }

}


