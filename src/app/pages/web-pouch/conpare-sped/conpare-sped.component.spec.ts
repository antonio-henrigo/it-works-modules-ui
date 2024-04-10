import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConpareSpedComponent } from './conpare-sped.component';

describe('ConpareSpedComponent', () => {
  let component: ConpareSpedComponent;
  let fixture: ComponentFixture<ConpareSpedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConpareSpedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConpareSpedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
