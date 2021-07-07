import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcOrghlookupSearchComponent } from './dxc-orghlookup-search.component';

describe('DxcOrghlookupSearchComponent', () => {
  let component: DxcOrghlookupSearchComponent;
  let fixture: ComponentFixture<DxcOrghlookupSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcOrghlookupSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcOrghlookupSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
