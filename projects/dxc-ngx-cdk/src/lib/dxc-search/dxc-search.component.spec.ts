import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcSearchComponent } from './dxc-search.component';

describe('DxcSearchComponent', () => {
  let component: DxcSearchComponent;
  let fixture: ComponentFixture<DxcSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
