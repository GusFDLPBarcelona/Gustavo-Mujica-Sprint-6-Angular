import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BudgetService } from '../services/budget.service';
import { iBudget } from '../interfaces/budget.interface';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {
  @Output() newItemEvent = new EventEmitter<number>();


  extras = 0;
  constructor(private budgetService: BudgetService) { }


  extrasForm = new FormGroup({
    cantidadPaginas: new FormControl<number>(1),
    cantidadIdiomas: new FormControl<number>(1)
  });

  capturarCambios(event: any): void {
    this.extras = 0;
    console.log("cargar presupuesto");
    this.extras = this.budgetService.calcularExtras(this.extrasForm.value);
    this.newItemEvent?.emit(this.extras);

  }







}
