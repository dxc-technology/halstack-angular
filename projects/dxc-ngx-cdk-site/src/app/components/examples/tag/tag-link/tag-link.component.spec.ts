import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagLinkComponent } from './tag-link.component';

describe('TagLinkComponent', () => {
  let component: TagLinkComponent;
  let fixture: ComponentFixture<TagLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
