import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderDefaultComponent } from './slider-default.component';

describe('SliderDefaultComponent', () => {
  let component: SliderDefaultComponent;
  let fixture: ComponentFixture<SliderDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
