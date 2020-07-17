import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingDefaultComponent } from './heading-default.component';

describe('HeadingDefaultComponent', () => {
  let component: HeadingDefaultComponent;
  let fixture: ComponentFixture<HeadingDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
