import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderUncontrolledComponent } from './slider-uncontrolled.component';

describe('SliderUncontrolledComponent', () => {
  let component: SliderUncontrolledComponent;
  let fixture: ComponentFixture<SliderUncontrolledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderUncontrolledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderUncontrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
