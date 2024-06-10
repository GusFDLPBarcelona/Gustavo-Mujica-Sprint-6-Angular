import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BudgetService } from './services/budget.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PanelComponent } from './panel/panel.component';
import { ModalComponent } from './shared/modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ReactiveFormsModule, PanelComponent, ModalComponent],
  template: '<app-panel></app-panel>',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'presupuestos';
  montoExtra = 0;
  @Input('extras') extras?: number;

  constructor(private budgetService: BudgetService) { }

  ngOnInit() {

  }
}
