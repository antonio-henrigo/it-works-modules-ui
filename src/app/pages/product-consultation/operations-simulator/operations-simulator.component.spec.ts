import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsSimulatorComponent } from './operations-simulator.component';

describe('OperationsSimulatorComponent', () => {
  let component: OperationsSimulatorComponent;
  let fixture: ComponentFixture<OperationsSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperationsSimulatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperationsSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
