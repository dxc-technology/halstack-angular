import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbedSectionNotesComponent } from './tabbed-section-notes.component';

describe('TabbedSectionNotesComponent', () => {
  let component: TabbedSectionNotesComponent;
  let fixture: ComponentFixture<TabbedSectionNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbedSectionNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbedSectionNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
