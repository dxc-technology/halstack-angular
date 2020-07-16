import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFilledParentComponent } from './button-filled-parent.component';

describe('ButtonFilledParentComponent', () => {
  let component: ButtonFilledParentComponent;
  let fixture: ComponentFixture<ButtonFilledParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonFilledParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonFilledParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
