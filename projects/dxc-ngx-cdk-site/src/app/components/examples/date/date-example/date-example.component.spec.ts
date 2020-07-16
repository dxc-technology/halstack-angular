import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateExampleComponent } from './date-example.component';

describe('DateExampleComponent', () => {
  let component: DateExampleComponent;
  let fixture: ComponentFixture<DateExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
