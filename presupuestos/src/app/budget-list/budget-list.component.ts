import { Component, Input, signal } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { iPresupuesto } from '../models/budget';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from "@angular/router";


@Component({
  selector: 'app-budget-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.css'
})
export class BudgetListComponent {


  SEO = 0;
  ADS = 1;
  WEB = 2;

  userPresupuestos: iPresupuesto[] = [];
  ascendente: boolean = true;
  buscadorForm = new FormGroup({
    nombre: new FormControl('')
  })

  constructor(private budgetService: BudgetService, private router: Router, private activatedRoute: ActivatedRoute) { }

  //presupuestosList = signal(this.userPresupuestos);

  ngOnInit(): void {
    this.userPresupuestos = this.budgetService.getPresupuestos();
  }

  ordenAscendentePorNombre: boolean = true;
  ordenarPorNombre(): void {
    if (this.ordenAscendentePorNombre) {

      this.userPresupuestos.sort((a, b) => {
        return a.usuario.nombre.localeCompare(b.usuario.nombre);
      });
    } else {

      this.userPresupuestos.sort((a, b) => {
        return b.usuario.nombre.localeCompare(a.usuario.nombre);
      });
      this.ordenAscendentePorNombre = true;
    }
  }
  ordenarPorFecha(): void {
    this.ascendente = !this.ascendente;
    if (!this.ascendente) {
      const arrayOrdenado = this.userPresupuestos.sort((a, b) => {
        if (a.usuario.fecha.getTime() < b.usuario.fecha.getTime()) {
          return -1;
        }
        if (a.usuario.fecha.getTime() > b.usuario.fecha.getTime()) {
          return 1;
        }
        this.userPresupuestos = arrayOrdenado;
        return 0;
      });
    } else {
      const arrayOrdenado = this.userPresupuestos.sort((a, b) => {
        if (a.usuario.fecha.getTime() > b.usuario.fecha.getTime()) {
          return -1;
        }
        if (a.usuario.fecha.getTime() > b.usuario.fecha.getTime()) {
          return 1;
        }
        this.userPresupuestos = arrayOrdenado;
        return 0;
      });
    }


  }
  ordenAscendente: boolean = true;

  ordenarPorMonto(): void {
    if (this.ordenAscendente) {
      this.userPresupuestos.sort((a, b) => a.monto - b.monto);
      this.ordenAscendente = false;
    } else {
      this.userPresupuestos.sort((a, b) => b.monto - a.monto);
      this.ordenAscendente = true;
    }
  }

  buscarNombre(event?: any): void {
    console.log(event);
    const nombre = this.buscadorForm.value.nombre;
    this.userPresupuestos = this.budgetService.buscarPorNombre(nombre!)
  }

  volverHome(): void {
    this.router.navigate(['home']);
  }


  irDetalle(usuario: string, monto: number, lenguajes: number, paginas: number, servicios: any[]): void {

    console.log("servicios", servicios);
    const web = servicios[0] ?? false;
    const ads = servicios[1] ?? false;
    const seo = servicios[3] ?? false;
    const url = `detalle/user/${usuario}/web/${web}/ads/${ads}/seo/${seo}/monto/${monto}/lang/${lenguajes}/paginas/${paginas}`;
    console.log(url);
    this.router.navigate([url]);
  }

}



