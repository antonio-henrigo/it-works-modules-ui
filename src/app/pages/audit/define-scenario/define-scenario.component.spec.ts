import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineScenarioComponent } from './define-scenario.component';

describe('DefineScenarioComponent', () => {
  let component: DefineScenarioComponent;
  let fixture: ComponentFixture<DefineScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefineScenarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefineScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
