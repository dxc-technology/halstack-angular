import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingWeightsComponent } from './heading-weights.component';

describe('HeadingWeightsComponent', () => {
  let component: HeadingWeightsComponent;
  let fixture: ComponentFixture<HeadingWeightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingWeightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingWeightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
