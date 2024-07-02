import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { PanelComponent } from '../panel/panel.component';
import { iPresupuesto } from '../models/budget';
import { BudgetListComponent } from '../budget-list/budget-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, PanelComponent, BudgetListComponent, ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  usuarioForm: FormGroup<{ nombre: FormControl<string | null>; telefono: FormControl<string | null>; email: FormControl<string | null>; }>; @ViewChild('modalComponent', { static: false }) modalComponent?: ModalComponent;

  constructor(private budgetService: BudgetService, private router: Router, private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{3}$/)]]
    });
  }

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

  presupuestoForm = new FormGroup({
    SEO: new FormControl(false),
    Ads: new FormControl(false),
    Web: new FormControl(false)
  });


  guardarPresupuesto(): void {
    if (this.usuarioForm.valid) {
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
      alert('Presupuesto creado con éxito');
      this.usuarioForm.reset({
        nombre: '',
        telefono: '',
        email: ''
      });
    } else {
      Object.values(this.usuarioForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }



  onEventChange() {
    this.monto = this.budgetService.calcularPresupuesto(this.presupuestoForm.value);
  }


  cargarPresupuesto(event: any): any {
    console.log("se actualiza el presupuesto", event);
    this.monto = this.budgetService.calcularPresupuesto(this.presupuestoForm.value);
  }

  goToLista(): void {
    this.router.navigate(['/lista']);
  }


  cerrarModal(): void {
    if (this.modalComponent !== undefined) {
      this.modalComponent?.cerrarModal();
    }
  }

}
