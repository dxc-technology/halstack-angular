import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectUncontrolledMultipleComponent } from './select-uncontrolled-multiple.component';

describe('SelectUncontrolledMultipleComponent', () => {
  let component: SelectUncontrolledMultipleComponent;
  let fixture: ComponentFixture<SelectUncontrolledMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectUncontrolledMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectUncontrolledMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
