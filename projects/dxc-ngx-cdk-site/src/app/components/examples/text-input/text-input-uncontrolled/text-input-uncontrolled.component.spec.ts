import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputUncontrolledComponent } from './text-input-uncontrolled.component';

describe('TextInputUncontrolledComponent', () => {
  let component: TextInputUncontrolledComponent;
  let fixture: ComponentFixture<TextInputUncontrolledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextInputUncontrolledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputUncontrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
