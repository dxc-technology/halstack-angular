import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSizedComponent } from './date-sized.component';

describe('DateSizedComponent', () => {
  let component: DateSizedComponent;
  let fixture: ComponentFixture<DateSizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
