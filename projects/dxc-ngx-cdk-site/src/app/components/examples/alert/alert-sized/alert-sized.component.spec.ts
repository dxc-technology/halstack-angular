import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSizedComponent } from './alert-sized.component';

describe('AlertSizedComponent', () => {
  let component: AlertSizedComponent;
  let fixture: ComponentFixture<AlertSizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertSizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertSizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
