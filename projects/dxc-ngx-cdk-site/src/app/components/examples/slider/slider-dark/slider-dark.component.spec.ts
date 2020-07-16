import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderDarkComponent } from './slider-dark.component';

describe('SliderDarkComponent', () => {
  let component: SliderDarkComponent;
  let fixture: ComponentFixture<SliderDarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderDarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
