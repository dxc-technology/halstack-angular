import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCustomContentComponent } from './footer-custom-content.component';

describe('FooterCustomContentComponent', () => {
  let component: FooterCustomContentComponent;
  let fixture: ComponentFixture<FooterCustomContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterCustomContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCustomContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
