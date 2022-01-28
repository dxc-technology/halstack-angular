import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcCronEditorComponent } from './dxc-cron-editor.component';

describe('DxcCronEditorComponent', () => {
  let component: DxcCronEditorComponent;
  let fixture: ComponentFixture<DxcCronEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxcCronEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcCronEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
