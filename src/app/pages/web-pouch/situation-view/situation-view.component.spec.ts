import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationViewComponent } from './situation-view.component';

describe('SituationViewComponent', () => {
  let component: SituationViewComponent;
  let fixture: ComponentFixture<SituationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SituationViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SituationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
