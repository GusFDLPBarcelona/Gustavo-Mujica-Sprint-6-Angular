import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BudgetService } from '../services/budget.service';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalComponent],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  @Output() newItemEvent = new EventEmitter<number>();
  @ViewChild('modalComponent') modalComponent?: ModalComponent;

  extras = 0;
  constructor(private budgetService: BudgetService) { }

  extrasForm = new FormGroup({
    cantidadPaginas: new FormControl<number>(1),
    cantidadIdiomas: new FormControl<number>(1)
  });

  capturarCambios(): void {
    this.extras = 0;
    this.extras = this.budgetService.calcularExtras(this.extrasForm.value);
    this.newItemEvent?.emit(this.extras);
  }

  abrirModalPadre(tipo: string) {
    console.log("abrir padre");
    this.modalComponent?.abrirModal(tipo);
  }
}
