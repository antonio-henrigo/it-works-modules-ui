import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCockpitComponent } from './sales-cockpit.component';

describe('SalesCockpitComponent', () => {
  let component: SalesCockpitComponent;
  let fixture: ComponentFixture<SalesCockpitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesCockpitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesCockpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
