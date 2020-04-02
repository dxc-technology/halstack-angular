import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcPaginatorComponent } from './dxc-paginator.component';

describe('DxcPaginatorComponent', () => {
  let component: DxcPaginatorComponent;
  let fixture: ComponentFixture<DxcPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
