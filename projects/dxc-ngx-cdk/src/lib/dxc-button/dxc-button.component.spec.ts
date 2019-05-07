import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcButtonComponent } from './dxc-button.component';

describe('DxcButtonComponent', () => {
  let component: DxcButtonComponent;
  let fixture: ComponentFixture<DxcButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
