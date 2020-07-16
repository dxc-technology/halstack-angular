import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagTablePropertiesComponent } from './tag-table-properties.component';

describe('TagTablePropertiesComponent', () => {
  let component: TagTablePropertiesComponent;
  let fixture: ComponentFixture<TagTablePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagTablePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagTablePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
