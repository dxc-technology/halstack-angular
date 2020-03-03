import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcTagComponent } from './dxc-tag.component';

describe('DxcTagComponent', () => {
  let component: DxcTagComponent;
  let fixture: ComponentFixture<DxcTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
