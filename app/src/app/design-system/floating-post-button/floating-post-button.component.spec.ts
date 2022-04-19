import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingPostButtonComponent } from './floating-post-button.component';

describe('FloatingPostButtonComponent', () => {
  let component: FloatingPostButtonComponent;
  let fixture: ComponentFixture<FloatingPostButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingPostButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingPostButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
