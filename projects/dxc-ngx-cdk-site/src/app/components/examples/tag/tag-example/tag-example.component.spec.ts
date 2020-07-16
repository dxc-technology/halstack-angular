import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagExampleComponent } from './tag-example.component';

describe('TagExampleComponent', () => {
  let component: TagExampleComponent;
  let fixture: ComponentFixture<TagExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
