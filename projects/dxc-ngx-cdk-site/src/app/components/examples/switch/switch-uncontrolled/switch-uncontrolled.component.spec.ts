import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchUncontrolledComponent } from './switch-uncontrolled.component';

describe('SwitchUncontrolledComponent', () => {
  let component: SwitchUncontrolledComponent;
  let fixture: ComponentFixture<SwitchUncontrolledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchUncontrolledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchUncontrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
