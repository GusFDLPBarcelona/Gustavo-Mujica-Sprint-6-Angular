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

  ordenarPorMonto(): void {
    const arrayOrdenado = this.userPresupuestos.sort((a, b) => {
      console.log(a.monto, b.monto);
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



