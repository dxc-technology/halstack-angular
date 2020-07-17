import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkUndercoratedComponent } from './link-undercorated.component';

describe('LinkUndercoratedComponent', () => {
  let component: LinkUndercoratedComponent;
  let fixture: ComponentFixture<LinkUndercoratedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkUndercoratedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkUndercoratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
