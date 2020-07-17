import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDefaultComponent } from './select-default.component';

describe('SelectDefaultComponent', () => {
  let component: SelectDefaultComponent;
  let fixture: ComponentFixture<SelectDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
