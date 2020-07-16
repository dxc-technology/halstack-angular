import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUnderlinedComponent } from './header-underlined.component';

describe('HeaderUnderlinedComponent', () => {
  let component: HeaderUnderlinedComponent;
  let fixture: ComponentFixture<HeaderUnderlinedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderUnderlinedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderUnderlinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
