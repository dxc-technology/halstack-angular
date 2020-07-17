import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxUncontrolledComponent } from './checkbox-uncontrolled.component';

describe('CheckboxUncontrolledComponent', () => {
  let component: CheckboxUncontrolledComponent;
  let fixture: ComponentFixture<CheckboxUncontrolledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxUncontrolledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxUncontrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
