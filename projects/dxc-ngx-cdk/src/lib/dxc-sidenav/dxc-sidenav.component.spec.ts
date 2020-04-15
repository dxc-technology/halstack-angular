import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcSidenavComponent } from './dxc-sidenav.component';

describe('DxcSidenavComponent', () => {
  let component: DxcSidenavComponent;
  let fixture: ComponentFixture<DxcSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
