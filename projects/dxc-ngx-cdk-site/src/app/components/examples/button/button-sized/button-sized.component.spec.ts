import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSizedComponent } from './button-sized.component';

describe('ButtonSizedComponent', () => {
  let component: ButtonSizedComponent;
  let fixture: ComponentFixture<ButtonSizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonSizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
