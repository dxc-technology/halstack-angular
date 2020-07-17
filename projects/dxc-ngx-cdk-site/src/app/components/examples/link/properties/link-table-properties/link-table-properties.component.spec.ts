import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTablePropertiesComponent } from './link-table-properties.component';

describe('LinkTablePropertiesComponent', () => {
  let component: LinkTablePropertiesComponent;
  let fixture: ComponentFixture<LinkTablePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkTablePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkTablePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
