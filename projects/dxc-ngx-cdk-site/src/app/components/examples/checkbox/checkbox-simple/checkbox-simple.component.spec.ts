import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxSimpleComponent } from './checkbox-simple.component';

describe('CheckboxSimpleComponent', () => {
  let component: CheckboxSimpleComponent;
  let fixture: ComponentFixture<CheckboxSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
