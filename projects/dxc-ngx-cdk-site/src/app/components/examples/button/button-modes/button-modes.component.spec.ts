import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonModesComponent } from './button-modes.component';

describe('ButtonModesComponent', () => {
  let component: ButtonModesComponent;
  let fixture: ComponentFixture<ButtonModesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonModesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonModesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
