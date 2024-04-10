import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfsIntegrationComponent } from './nfs-integration.component';

describe('NfsIntegrationComponent', () => {
  let component: NfsIntegrationComponent;
  let fixture: ComponentFixture<NfsIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NfsIntegrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NfsIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
