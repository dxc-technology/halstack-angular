import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDefaultComponent } from './link-default.component';

describe('LinkDefaultComponent', () => {
  let component: LinkDefaultComponent;
  let fixture: ComponentFixture<LinkDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
