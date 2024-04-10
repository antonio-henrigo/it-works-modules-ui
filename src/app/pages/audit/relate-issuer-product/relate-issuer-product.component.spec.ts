import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelateIssuerProductComponent } from './relate-issuer-product.component';

describe('RelateIssuerProductComponent', () => {
  let component: RelateIssuerProductComponent;
  let fixture: ComponentFixture<RelateIssuerProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelateIssuerProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelateIssuerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
