import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownOutlinedtComponent } from './dropdown-outlined.component';

describe('DropdownOutlinedComponent', () => {
  let component: DropdownOutlinedtComponent;
  let fixture: ComponentFixture<DropdownOutlinedtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownOutlinedtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownOutlinedtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
