import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcTabbedSectionComponent } from './dxc-tabbed-section.component';

describe('DxcTabbedSectionComponent', () => {
  let component: DxcTabbedSectionComponent;
  let fixture: ComponentFixture<DxcTabbedSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcTabbedSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcTabbedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
