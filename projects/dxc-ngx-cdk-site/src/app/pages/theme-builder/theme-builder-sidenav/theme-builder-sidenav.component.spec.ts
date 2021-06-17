import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeBuilderSidenavComponent } from './theme-builder-sidenav.component';

describe('ThemeBuilderSidenavComponent', () => {
  let component: ThemeBuilderSidenavComponent;
  let fixture: ComponentFixture<ThemeBuilderSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeBuilderSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeBuilderSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
