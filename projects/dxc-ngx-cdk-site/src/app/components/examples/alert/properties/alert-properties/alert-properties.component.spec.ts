import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertPropertiesComponent } from './alert-properties.component';

describe('AlertPropertiesComponent', () => {
  let component: AlertPropertiesComponent;
  let fixture: ComponentFixture<AlertPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
