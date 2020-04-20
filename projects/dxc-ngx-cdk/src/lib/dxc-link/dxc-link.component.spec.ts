import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcLinkComponent } from './dxc-link.component';

describe('DxcLinkComponent', () => {
  let component: DxcLinkComponent;
  let fixture: ComponentFixture<DxcLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
