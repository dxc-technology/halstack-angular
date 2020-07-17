import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderUnlimitedComponent } from './slider-unlimited.component';

describe('SliderUnlimitedComponent', () => {
  let component: SliderUnlimitedComponent;
  let fixture: ComponentFixture<SliderUnlimitedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderUnlimitedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderUnlimitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
