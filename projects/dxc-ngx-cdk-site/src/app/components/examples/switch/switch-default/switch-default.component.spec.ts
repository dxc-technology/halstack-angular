import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchDefaultComponent } from './switch-default.component';

describe('SwitchDefaultComponent', () => {
  let component: SwitchDefaultComponent;
  let fixture: ComponentFixture<SwitchDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
