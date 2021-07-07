import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcCodeLookupComponent } from './dxc-codelookup.component';

describe('DxcCodeLookupComponent', () => {
  let component: DxcCodeLookupComponent;
  let fixture: ComponentFixture<DxcCodeLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcCodeLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcCodeLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
