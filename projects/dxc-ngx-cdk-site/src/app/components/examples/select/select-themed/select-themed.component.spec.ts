import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectThemedComponent } from './select-themed.component';

describe('SelectThemedComponent', () => {
  let component: SelectThemedComponent;
  let fixture: ComponentFixture<SelectThemedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectThemedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectThemedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
