import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeInputsConfigComponent } from './theme-inputs-config.component';

describe('ThemeInputsConfigComponent', () => {
  let component: ThemeInputsConfigComponent;
  let fixture: ComponentFixture<ThemeInputsConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeInputsConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeInputsConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
