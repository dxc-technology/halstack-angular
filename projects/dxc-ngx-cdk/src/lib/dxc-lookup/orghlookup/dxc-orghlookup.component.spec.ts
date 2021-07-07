import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcOrghlookupComponent } from './dxc-orghlookup.component';

describe('DxcOrghlookupComponent', () => {
  let component: DxcOrghlookupComponent;
  let fixture: ComponentFixture<DxcOrghlookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcOrghlookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcOrghlookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
