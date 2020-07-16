import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleDarkComponent } from './toggle-dark.component';

describe('ToggleDarkComponent', () => {
  let component: ToggleDarkComponent;
  let fixture: ComponentFixture<ToggleDarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleDarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
