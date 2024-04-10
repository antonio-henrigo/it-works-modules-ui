import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditDocumentsComponent } from './audit-documents.component';

describe('AuditDocumentsComponent', () => {
  let component: AuditDocumentsComponent;
  let fixture: ComponentFixture<AuditDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuditDocumentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuditDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
