import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcTextEditorComponent } from './dxc-text-editor.component';

describe('DxcTextEditorComponent', () => {
  let component: DxcTextEditorComponent;
  let fixture: ComponentFixture<DxcTextEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcTextEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
