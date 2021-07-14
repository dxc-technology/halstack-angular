import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcNewInputTextComponent } from './dxc-new-input-text.component';

describe('DxcNewInputTextComponent', () => {
  let component: DxcNewInputTextComponent;
  let fixture: ComponentFixture<DxcNewInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxcNewInputTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcNewInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
