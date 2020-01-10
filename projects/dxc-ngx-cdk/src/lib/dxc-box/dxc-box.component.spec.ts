import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcBoxComponent } from './dxc-box.component';

describe('DxcBoxComponent', () => {
  let component: DxcBoxComponent;
  let fixture: ComponentFixture<DxcBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
