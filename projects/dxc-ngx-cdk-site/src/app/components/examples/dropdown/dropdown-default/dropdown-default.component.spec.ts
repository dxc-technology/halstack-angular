import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownDefaultComponent } from './dropdown-default.component';

describe('DropdownDefaultComponent', () => {
  let component: DropdownDefaultComponent;
  let fixture: ComponentFixture<DropdownDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
