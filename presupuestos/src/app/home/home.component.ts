import { Component } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { FormControl, FormGroup, ReactiveFormsModule, } from '@angular/forms';
import { iBudget } from '../interfaces/budget.interface';
import { PanelComponent } from '../panel/panel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, PanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private budgetService: BudgetService) { }

  monto: number = 0;

  presupuestoForm = new FormGroup({
    SEO: new FormControl(false),
    Ads: new FormControl(false),
    Web: new FormControl(false)
  });




  onEventChange() {
    this.monto = this.budgetService.calcularPresupuesto(this.presupuestoForm.value);
  }


  cargarPresupuesto(event: any): any {
    console.log("se actualiza el presupuesto", event);
    this.monto = this.budgetService.calcularPresupuesto(this.presupuestoForm.value);
  }
}
