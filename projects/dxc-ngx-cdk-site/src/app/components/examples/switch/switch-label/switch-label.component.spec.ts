import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchLabelComponent } from './switch-label.component';

describe('SwitchThemedComponent', () => {
  let component: SwitchLabelComponent;
  let fixture: ComponentFixture<SwitchLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
