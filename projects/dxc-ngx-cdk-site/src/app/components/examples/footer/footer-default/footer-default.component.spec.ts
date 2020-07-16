import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDefaultComponent } from './footer-default.component';

describe('FooterDefaultComponent', () => {
  let component: FooterDefaultComponent;
  let fixture: ComponentFixture<FooterDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
