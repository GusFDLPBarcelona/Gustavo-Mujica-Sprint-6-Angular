# Sprint 6 — Calculadora de Presupuestos

Aplicación de gestión de presupuestos construida con **Angular 18** que permite calcular el coste de servicios digitales (SEO, Ads, Web), guardar presupuestos con datos de cliente y consultarlos en un listado con ordenación, búsqueda y vista de detalle compartible por URL.

## Demo

[Ver demo en GitHub Pages](https://gusfdlpbarcelona.github.io/Gustavo-Mujica-Sprint-6-Angular/)

## Tecnologías

- Angular 18 (standalone components, nueva sintaxis de control de flujo `@if` / `@for`)
- TypeScript
- Angular Router con rutas parametrizadas
- Reactive Forms con validación
- Bootstrap 5

## Estructura del proyecto

```
presupuestos/
├── src/app/
│   ├── home/            # Página principal: formulario de servicios y datos de cliente
│   ├── panel/           # Subpanel de extras Web (páginas e idiomas) con modal informativo
│   ├── budget-list/     # Listado de presupuestos con ordenación y búsqueda
│   ├── detalle/         # Vista de detalle de un presupuesto (datos en la URL)
│   ├── shared/modal/    # Componente modal reutilizable
│   ├── services/        # BudgetService: lógica de cálculo y almacenamiento
│   ├── models/          # Interfaces iPresupuesto, iExtra
│   └── app.routes.ts    # Enrutado: /home, /lista, /detalle/...
```

## Conceptos practicados

- **Angular Router** con rutas estáticas y parametrizadas (múltiples params en URL)
- **Reactive Forms** (`FormGroup`, `FormControl`, `Validators`, `FormBuilder`)
- **Validación de formularios** con feedback visual (`[class.is-valid]`, `[class.is-invalid]`)
- **`@Output` / `EventEmitter`** para comunicación hijo → padre (PanelComponent → HomeComponent)
- **`@ViewChild`** para acceder a métodos de componentes hijos
- **Servicios e inyección de dependencias** para compartir estado entre vistas
- **URL como estado** — el detalle del presupuesto viaja completamente en la URL y puede compartirse
- **Nueva sintaxis de control de flujo** (`@if`, `@for`) — Angular 17+

## Instalación

```bash
npm install
ng serve
```

Navega a `http://localhost:4200/`.
