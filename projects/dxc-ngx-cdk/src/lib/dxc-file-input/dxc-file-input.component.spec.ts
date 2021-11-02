import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcFileInputComponent } from './dxc-file-input.component';

describe('DxcFileInputComponent', () => {
  let component: DxcFileInputComponent;
  let fixture: ComponentFixture<DxcFileInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxcFileInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcFileInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
