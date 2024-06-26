import { Component } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { PanelComponent } from '../panel/panel.component';
import { iPresupuesto } from '../models/budget';
import { BudgetListComponent } from '../budget-list/budget-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, PanelComponent, BudgetListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private budgetService: BudgetService) { }

  monto: number = 0;
  presupuesto: iPresupuesto = {
    servicios: [],
    usuario: {
      nombre: '',
      telefono: '',
      email: '',
      fecha: new Date()
    },
    monto: 0,
    extras: {
      cantidadIdiomas: 0,
      cantidadPaginas: 0
    }
  };
  usuarioForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.pattern('[A-Z][a-z]')]),
    telefono: new FormControl('', [Validators.maxLength(9), Validators.minLength(9), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required])
  })
  presupuestoForm = new FormGroup({
    SEO: new FormControl(false),
    Ads: new FormControl(false),
    Web: new FormControl(false)
  });

  guardarPresupuesto(): void {
    const array: iPresupuesto[] = [];
    let presupuesto: iPresupuesto = {
      servicios: [{ 'SEO': this.presupuestoForm.value.SEO }, { 'Ads': this.presupuestoForm.value.Ads }, { 'Web': this.presupuestoForm.value.Web }],
      usuario: {
        nombre: this.usuarioForm.value.nombre ?? '',
        telefono: this.usuarioForm.value.telefono ?? '',
        email: this.usuarioForm.value.email ?? '',
        fecha: new Date()
      },
      monto: this.monto,
      extras: {
        cantidadIdiomas: 0,
        cantidadPaginas: 0
      }
    }
    this.budgetService.crearPresupuesto(presupuesto);

  }



  onEventChange() {
    this.monto = this.budgetService.calcularPresupuesto(this.presupuestoForm.value);
  }


  cargarPresupuesto(event: any): any {
    console.log("se actualiza el presupuesto", event);
    this.monto = this.budgetService.calcularPresupuesto(this.presupuestoForm.value);
  }
}
