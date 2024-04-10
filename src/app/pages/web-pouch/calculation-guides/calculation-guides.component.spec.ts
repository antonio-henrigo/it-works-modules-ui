import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationGuidesComponent } from './calculation-guides.component';

describe('CalculationGuidesComponent', () => {
  let component: CalculationGuidesComponent;
  let fixture: ComponentFixture<CalculationGuidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculationGuidesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculationGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
