import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioSimpleComponent } from './radio-simple.component';

describe('RadioSimpleComponent', () => {
  let component: RadioSimpleComponent;
  let fixture: ComponentFixture<RadioSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
