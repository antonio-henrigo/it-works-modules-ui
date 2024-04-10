import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalSimpleRecoveryComponent } from './national-simple-recovery.component';

describe('NationalSimpleRecoveryComponent', () => {
  let component: NationalSimpleRecoveryComponent;
  let fixture: ComponentFixture<NationalSimpleRecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NationalSimpleRecoveryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NationalSimpleRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
