import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchThemedComponent } from './switch-themed.component';

describe('SwitchThemedComponent', () => {
  let component: SwitchThemedComponent;
  let fixture: ComponentFixture<SwitchThemedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchThemedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchThemedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
