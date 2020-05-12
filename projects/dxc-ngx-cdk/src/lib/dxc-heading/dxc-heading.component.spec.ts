import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcHeadingComponent } from './dxc-heading.component';

describe('DxcHeadingComponent', () => {
  let component: DxcHeadingComponent;
  let fixture: ComponentFixture<DxcHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
