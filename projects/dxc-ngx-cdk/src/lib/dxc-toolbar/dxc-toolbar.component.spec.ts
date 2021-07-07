import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcToolbarComponent } from './dxc-toolbar.component';

describe('DxcToolbarComponent', () => {
  let component: DxcToolbarComponent;
  let fixture: ComponentFixture<DxcToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
