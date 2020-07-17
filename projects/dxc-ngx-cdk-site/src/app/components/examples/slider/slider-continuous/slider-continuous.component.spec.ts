import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderContinuousComponent } from './slider-continuous.component';

describe('SliderContinuousComponent', () => {
  let component: SliderContinuousComponent;
  let fixture: ComponentFixture<SliderContinuousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderContinuousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderContinuousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
