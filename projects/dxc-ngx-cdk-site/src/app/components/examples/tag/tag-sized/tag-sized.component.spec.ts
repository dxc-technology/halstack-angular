import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagSizedComponent } from './tag-sized.component';

describe('TagSizedComponent', () => {
  let component: TagSizedComponent;
  let fixture: ComponentFixture<TagSizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagSizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagSizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
