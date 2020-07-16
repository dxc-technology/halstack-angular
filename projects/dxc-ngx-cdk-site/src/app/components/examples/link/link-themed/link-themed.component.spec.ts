import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkThemedComponent } from './link-themed.component';

describe('LinkThemedComponent', () => {
  let component: LinkThemedComponent;
  let fixture: ComponentFixture<LinkThemedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkThemedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkThemedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
