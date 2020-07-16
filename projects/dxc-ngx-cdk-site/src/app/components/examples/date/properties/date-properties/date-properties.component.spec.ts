import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePropertiesComponent } from './date-properties.component';

describe('DatePropertiesComponent', () => {
  let component: DatePropertiesComponent;
  let fixture: ComponentFixture<DatePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
