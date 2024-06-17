import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanelComponent } from './panel.component';
import { BudgetService } from '../services/budget.service';

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;
  let budgetService: jasmine.SpyObj<BudgetService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('BudgetService', ['calcularExtras']);

    await TestBed.configureTestingModule({
      declarations: [PanelComponent],
      providers: [{ provide: BudgetService, useValue: spy }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    budgetService = TestBed.inject(BudgetService) as jasmine.SpyObj<BudgetService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add extras and send them to our service', () => {
    component.extras = 0;
    component.capturarCambios();
    expect(budgetService.calcularExtras).toHaveBeenCalled();
  });

  it('should ensure extras is a number before calling calcularExtras', () => {
    component.extras = 100;
    component.capturarCambios();
    expect(typeof component.extras).toBe('number');
    expect(budgetService.calcularExtras).toHaveBeenCalled();
  });

  it('should ensure the budget is 500 euros if no extras are added', () => {
    budgetService.calcularExtras.and.returnValue(500);
    component.extras = 0;
    component.capturarCambios();
    expect(component.extras).toBe(500);
  });
});