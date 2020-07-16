import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderExampleComponent } from './slider-example.component';

describe('SliderExampleComponent', () => {
  let component: SliderExampleComponent;
  let fixture: ComponentFixture<SliderExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
