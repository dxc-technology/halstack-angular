import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderDiscreteComponent } from './slider-discrete.component';

describe('SliderDiscreteComponent', () => {
  let component: SliderDiscreteComponent;
  let fixture: ComponentFixture<SliderDiscreteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderDiscreteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderDiscreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
