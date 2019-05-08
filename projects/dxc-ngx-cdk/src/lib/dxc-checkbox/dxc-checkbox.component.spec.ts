import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcCheckboxComponent } from './dxc-checkbox.component';
import { MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

describe('DxcCheckboxComponent', () => {
  let component: DxcCheckboxComponent;
  let fixture: ComponentFixture<DxcCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCheckboxModule, FormsModule],
      declarations: [DxcCheckboxComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
