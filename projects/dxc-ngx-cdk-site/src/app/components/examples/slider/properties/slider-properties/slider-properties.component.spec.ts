import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPropertiesComponent } from './slider-properties.component';

describe('SliderPropertiesComponent', () => {
  let component: SliderPropertiesComponent;
  let fixture: ComponentFixture<SliderPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
