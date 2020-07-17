import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSizedComponent } from './slider-sized.component';

describe('SliderSizedComponent', () => {
  let component: SliderSizedComponent;
  let fixture: ComponentFixture<SliderSizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderSizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderSizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
