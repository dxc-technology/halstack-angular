import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcTextInputComponent } from './dxc-input-text.component';

describe('DxcTextInputComponent', () => {
  let component: DxcTextInputComponent;
  let fixture: ComponentFixture<DxcTextInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcTextInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
