import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Route, RouterModule } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { Component, importProvidersFrom } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BudgetListComponent } from './app/budget-list/budget-list.component';
import { DetalleComponent } from './app/detalle/detalle.component';
import { detalleGuardGuard } from './app/detalle-guard.guard';

export const routes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'lista', component: BudgetListComponent },
  {
    path: 'detalle/user/:user/web/:web/ads/:ads/seo/:seo/monto/:monto/lang/:lang/paginas/:paginas',
    component: DetalleComponent, canActivate: [detalleGuardGuard], pathMatch: 'full'
  }
];


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(),
  ],
})