import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderInputComponent } from './slider-input.component';

describe('SliderInputComponent', () => {
  let component: SliderInputComponent;
  let fixture: ComponentFixture<SliderInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
