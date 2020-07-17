import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorTablePropertiesComponent } from './paginator-table-properties.component';

describe('PaginatorTablePropertiesComponent', () => {
  let component: PaginatorTablePropertiesComponent;
  let fixture: ComponentFixture<PaginatorTablePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatorTablePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorTablePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
