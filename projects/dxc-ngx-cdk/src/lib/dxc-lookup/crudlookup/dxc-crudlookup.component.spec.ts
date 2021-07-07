import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcCrudLookupComponent } from './dxc-crudlookup.component';

describe('DxcCrudLookupComponent', () => {
  let component: DxcCrudLookupComponent;
  let fixture: ComponentFixture<DxcCrudLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcCrudLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcCrudLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
