import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectUncontrolledComponent } from './select-uncontrolled.component';

describe('SelectUncontrolledComponent', () => {
  let component: SelectUncontrolledComponent;
  let fixture: ComponentFixture<SelectUncontrolledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectUncontrolledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectUncontrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
