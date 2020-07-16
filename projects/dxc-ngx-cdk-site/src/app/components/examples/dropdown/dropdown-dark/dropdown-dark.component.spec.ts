import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {DropdownDarkComponent} from './dropdown-dark.component';

describe('DropdownDefaultComponent', () => {
  let component: DropdownDarkComponent;
  let fixture: ComponentFixture<DropdownDarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownDarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
