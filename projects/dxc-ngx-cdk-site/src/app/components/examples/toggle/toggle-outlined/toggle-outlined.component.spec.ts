import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleOutlinedComponent } from './toggle-outlined.component';

describe('ToggleOutlinedComponent', () => {
  let component: ToggleOutlinedComponent;
  let fixture: ComponentFixture<ToggleOutlinedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleOutlinedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleOutlinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
