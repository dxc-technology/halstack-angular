import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingDarkComponent } from './heading-dark.component';

describe('HeadingDarkComponent', () => {
  let component: HeadingDarkComponent;
  let fixture: ComponentFixture<HeadingDarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingDarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
