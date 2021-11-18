import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcNewSelectComponent } from './dxc-new-select.component';

describe('DxcNewSelectComponent', () => {
  let component: DxcNewSelectComponent;
  let fixture: ComponentFixture<DxcNewSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxcNewSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcNewSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
