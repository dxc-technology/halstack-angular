import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbedSectionInfoComponent } from './tabbed-section-info.component';

describe('TabbedSectionInfoComponent', () => {
  let component: TabbedSectionInfoComponent;
  let fixture: ComponentFixture<TabbedSectionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbedSectionInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbedSectionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
