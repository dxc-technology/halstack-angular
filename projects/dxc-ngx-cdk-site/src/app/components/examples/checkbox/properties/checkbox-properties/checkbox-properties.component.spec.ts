import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxPropertiesComponent } from './checkbox-properties.component';

describe('CheckboxPropertiesComponent', () => {
  let component: CheckboxPropertiesComponent;
  let fixture: ComponentFixture<CheckboxPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
