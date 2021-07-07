import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcSubHeadingComponent } from './dxc-sub-heading.component';

describe('DxcSubHeadingComponent', () => {
  let component: DxcSubHeadingComponent;
  let fixture: ComponentFixture<DxcSubHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcSubHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcSubHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
