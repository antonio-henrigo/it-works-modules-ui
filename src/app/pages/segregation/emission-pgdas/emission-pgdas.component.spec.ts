import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissionPgdasComponent } from './emission-pgdas.component';

describe('EmissionPgdasComponent', () => {
  let component: EmissionPgdasComponent;
  let fixture: ComponentFixture<EmissionPgdasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmissionPgdasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmissionPgdasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
