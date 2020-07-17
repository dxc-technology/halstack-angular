import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagDefaultComponent } from './tag-default.component';

describe('TagDefaultComponent', () => {
  let component: TagDefaultComponent;
  let fixture: ComponentFixture<TagDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
