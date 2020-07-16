import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioSizedComponent } from './radio-sized.component';

describe('RadioSizedComponent', () => {
  let component: RadioSizedComponent;
  let fixture: ComponentFixture<RadioSizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioSizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioSizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
