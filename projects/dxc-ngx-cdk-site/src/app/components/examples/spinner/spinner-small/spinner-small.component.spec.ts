import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerSmallComponent } from './spinner-small.component';

describe('SpinnerSmallComponent', () => {
  let component: SpinnerSmallComponent;
  let fixture: ComponentFixture<SpinnerSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
