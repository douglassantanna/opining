import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawPostBoxComponent } from './raw-post-box.component';

describe('RawPostBoxComponent', () => {
  let component: RawPostBoxComponent;
  let fixture: ComponentFixture<RawPostBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RawPostBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RawPostBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
