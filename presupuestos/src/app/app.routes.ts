import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { DetalleComponent } from './detalle/detalle.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'lista', component: BudgetListComponent },
  { path: 'detalle/user/:user/web/:web/ads/:ads/seo/:seo/monto/:monto/lang/:lang/paginas/:paginas', component: DetalleComponent },
];
