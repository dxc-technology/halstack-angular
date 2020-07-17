import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateUncontrolledComponent } from './date-uncontrolled.component';

describe('DateUncontrolledComponent', () => {
  let component: DateUncontrolledComponent;
  let fixture: ComponentFixture<DateUncontrolledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateUncontrolledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateUncontrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
