import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagInfoComponent } from './tag-info.component';

describe('TagInfoComponent', () => {
  let component: TagInfoComponent;
  let fixture: ComponentFixture<TagInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
