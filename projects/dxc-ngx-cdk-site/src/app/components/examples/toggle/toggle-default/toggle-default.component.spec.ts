import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleDefaultComponent } from './toggle-default.component';

describe('ToggleDefaultComponent', () => {
  let component: ToggleDefaultComponent;
  let fixture: ComponentFixture<ToggleDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
