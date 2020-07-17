import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbedSectionExampleComponent } from './tabbed-section-example.component';

describe('TabbedSectionExampleComponent', () => {
  let component: TabbedSectionExampleComponent;
  let fixture: ComponentFixture<TabbedSectionExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbedSectionExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbedSectionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
