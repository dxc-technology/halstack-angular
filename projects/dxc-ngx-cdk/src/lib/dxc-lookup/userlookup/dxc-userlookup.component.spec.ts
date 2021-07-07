import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcUserLookupComponent } from './dxc-userlookup.component';

describe('DxcUserLookupComponent', () => {
  let component: DxcUserLookupComponent;
  let fixture: ComponentFixture<DxcUserLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcUserLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcUserLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
