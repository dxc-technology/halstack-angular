import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeBuilderComponent } from './theme-builder.component';

describe('ThemeBuilderComponent', () => {
  let component: ThemeBuilderComponent;
  let fixture: ComponentFixture<ThemeBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
