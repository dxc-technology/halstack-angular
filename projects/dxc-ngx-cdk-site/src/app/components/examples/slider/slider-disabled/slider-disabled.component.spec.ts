import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderDisabledComponent } from './slider-disabled.component';

describe('SliderDisabledComponent', () => {
  let component: SliderDisabledComponent;
  let fixture: ComponentFixture<SliderDisabledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderDisabledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
