import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetParticipantActivityComponent } from './reset-participant-activity.component';

describe('ResetParticipantActivityComponent', () => {
  let component: ResetParticipantActivityComponent;
  let fixture: ComponentFixture<ResetParticipantActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResetParticipantActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResetParticipantActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
