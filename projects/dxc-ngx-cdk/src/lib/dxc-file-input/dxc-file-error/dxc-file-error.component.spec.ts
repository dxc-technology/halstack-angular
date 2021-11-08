import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcFileErrorComponent } from './dxc-file-error.component';

describe('DxcFileErrorComponent', () => {
  let component: DxcFileErrorComponent;
  let fixture: ComponentFixture<DxcFileErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxcFileErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcFileErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
