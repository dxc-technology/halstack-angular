import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcBaselookupComponent } from './dxc-baselookup.component';

describe('DxcBaselookupComponent', () => {
  let component: DxcBaselookupComponent;
  let fixture: ComponentFixture<DxcBaselookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcBaselookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcBaselookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
