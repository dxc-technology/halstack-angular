import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSimpleComponent } from './date-simple.component';

describe('DateSimpleComponent', () => {
  let component: DateSimpleComponent;
  let fixture: ComponentFixture<DateSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
