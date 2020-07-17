import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagActionComponent } from './tag-action.component';

describe('TagActionComponent', () => {
  let component: TagActionComponent;
  let fixture: ComponentFixture<TagActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
