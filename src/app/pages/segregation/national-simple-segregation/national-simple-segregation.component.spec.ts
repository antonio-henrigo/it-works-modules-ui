import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalSimpleSegregationComponent } from './national-simple-segregation.component';

describe('NationalSimpleSegregationComponent', () => {
  let component: NationalSimpleSegregationComponent;
  let fixture: ComponentFixture<NationalSimpleSegregationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NationalSimpleSegregationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NationalSimpleSegregationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
