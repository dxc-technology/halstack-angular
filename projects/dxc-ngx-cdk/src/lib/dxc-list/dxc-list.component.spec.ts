import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcListComponent } from './dxc-list.component';

describe('DxcListComponent', () => {
  let component: DxcListComponent;
  let fixture: ComponentFixture<DxcListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
