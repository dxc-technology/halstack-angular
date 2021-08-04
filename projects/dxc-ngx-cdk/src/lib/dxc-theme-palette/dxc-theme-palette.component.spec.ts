import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcThemePaletteComponent } from './dxc-theme-palette.component';

describe('DxcThemePaletteComponent', () => {
  let component: DxcThemePaletteComponent;
  let fixture: ComponentFixture<DxcThemePaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxcThemePaletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcThemePaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
