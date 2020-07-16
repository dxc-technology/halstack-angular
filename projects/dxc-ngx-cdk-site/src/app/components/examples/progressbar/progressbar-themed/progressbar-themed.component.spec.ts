import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarThemedComponent } from './progressbar-themed.component';

describe('ProgressbarThemedComponent', () => {
  let component: ProgressbarThemedComponent;
  let fixture: ComponentFixture<ProgressbarThemedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressbarThemedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressbarThemedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
