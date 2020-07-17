import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioLabelPositionComponent } from './radio-label-position.component';

describe('RadioLabelPositionComponent', () => {
  let component: RadioLabelPositionComponent;
  let fixture: ComponentFixture<RadioLabelPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioLabelPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioLabelPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
