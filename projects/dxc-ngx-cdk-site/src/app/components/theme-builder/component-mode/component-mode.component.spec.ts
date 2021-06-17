import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentModeComponent } from './component-mode.component';

describe('ComponentModeComponent', () => {
  let component: ComponentModeComponent;
  let fixture: ComponentFixture<ComponentModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
