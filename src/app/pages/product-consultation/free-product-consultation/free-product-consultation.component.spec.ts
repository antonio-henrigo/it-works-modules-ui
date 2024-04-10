import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeProductConsultationComponent } from './free-product-consultation.component';

describe('FreeProductConsultationComponent', () => {
  let component: FreeProductConsultationComponent;
  let fixture: ComponentFixture<FreeProductConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreeProductConsultationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreeProductConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
