import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingExampleComponent } from './heading-example.component';

describe('HeadingExampleComponent', () => {
  let component: HeadingExampleComponent;
  let fixture: ComponentFixture<HeadingExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
