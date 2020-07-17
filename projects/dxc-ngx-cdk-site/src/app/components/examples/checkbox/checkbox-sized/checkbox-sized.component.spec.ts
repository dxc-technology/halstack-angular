import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxSizedComponent } from './checkbox-sized.component';

describe('CheckboxSizedComponent', () => {
  let component: CheckboxSizedComponent;
  let fixture: ComponentFixture<CheckboxSizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxSizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxSizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
