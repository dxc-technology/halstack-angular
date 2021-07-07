import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcTimeComponent } from './dxc-time.component';

describe('DxcTimeComponent', () => {
  let component: DxcTimeComponent;
  let fixture: ComponentFixture<DxcTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
