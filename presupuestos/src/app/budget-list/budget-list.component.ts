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
  userPresupuestos: iPresupuesto[] = [];


  constructor(private budgetService: BudgetService) { }

  presupuestosList = signal(this.userPresupuestos);

  ngOnInit(): void {
    this.userPresupuestos = this.budgetService.getPrespuestos();
  }
}
