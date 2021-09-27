import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcStatusPanelComponent } from './dxc-status-panel.component';

describe('DxcStatusPanelComponent', () => {
  let component: DxcStatusPanelComponent;
  let fixture: ComponentFixture<DxcStatusPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxcStatusPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcStatusPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
