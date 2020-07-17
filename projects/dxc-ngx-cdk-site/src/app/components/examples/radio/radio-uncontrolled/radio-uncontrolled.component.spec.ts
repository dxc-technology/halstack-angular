import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioUncontrolledComponent } from './radio-uncontrolled.component';

describe('RadioUncontrolledComponent', () => {
  let component: RadioUncontrolledComponent;
  let fixture: ComponentFixture<RadioUncontrolledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioUncontrolledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioUncontrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
