import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCustomContentComponent } from './header-custom-content.component';

describe('HeaderCustomContentComponent', () => {
  let component: HeaderCustomContentComponent;
  let fixture: ComponentFixture<HeaderCustomContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCustomContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCustomContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
