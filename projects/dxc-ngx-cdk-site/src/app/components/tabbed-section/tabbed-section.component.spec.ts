import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbedSectionComponent } from './tabbed-section.component';

describe('TabbedSectionComponent', () => {
  let component: TabbedSectionComponent;
  let fixture: ComponentFixture<TabbedSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbedSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
