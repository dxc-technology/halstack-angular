import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDarkComponent } from './header-dark.component';

describe('HeaderDarkComponent', () => {
  let component: HeaderDarkComponent;
  let fixture: ComponentFixture<HeaderDarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderDarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
