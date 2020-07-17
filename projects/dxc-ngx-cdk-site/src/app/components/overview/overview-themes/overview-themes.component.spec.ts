import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewThemesComponent } from './overview-themes.component';

describe('OverviewThemesComponent', () => {
  let component: OverviewThemesComponent;
  let fixture: ComponentFixture<OverviewThemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewThemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
