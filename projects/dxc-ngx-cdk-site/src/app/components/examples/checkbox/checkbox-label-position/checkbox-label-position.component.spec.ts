import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxLabelPositionComponent } from './checkbox-label-position.component';

describe('CheckboxLabelPositionComponent', () => {
  let component: CheckboxLabelPositionComponent;
  let fixture: ComponentFixture<CheckboxLabelPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxLabelPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxLabelPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
