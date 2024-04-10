import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPouchComponent } from './web-pouch.component';

describe('WebPouchComponent', () => {
  let component: WebPouchComponent;
  let fixture: ComponentFixture<WebPouchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebPouchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebPouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
