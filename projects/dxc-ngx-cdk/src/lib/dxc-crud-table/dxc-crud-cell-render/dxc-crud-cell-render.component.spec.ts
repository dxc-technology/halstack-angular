import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcCrudCellRenderComponent } from './dxc-crud-cell-render.component';

describe('DxcCrudCellRenderComponent', () => {
  let component: DxcCrudCellRenderComponent;
  let fixture: ComponentFixture<DxcCrudCellRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxcCrudCellRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcCrudCellRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
