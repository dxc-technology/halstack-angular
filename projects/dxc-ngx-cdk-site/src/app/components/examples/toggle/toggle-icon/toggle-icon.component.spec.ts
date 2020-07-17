import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleIconComponent } from './toggle-icon.component';

describe('ToggleIconComponent', () => {
  let component: ToggleIconComponent;
  let fixture: ComponentFixture<ToggleIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
