import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDisabledComponent } from './link-disabled.component';

describe('LinkDisabledComponent', () => {
  let component: LinkDisabledComponent;
  let fixture: ComponentFixture<LinkDisabledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkDisabledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
