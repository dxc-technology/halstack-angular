import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkIconComponent } from './link-icon.component';

describe('LinkIconComponent', () => {
  let component: LinkIconComponent;
  let fixture: ComponentFixture<LinkIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
