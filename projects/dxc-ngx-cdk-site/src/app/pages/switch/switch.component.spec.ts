import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwicthComponent } from './switch.component';

describe('SwicthComponent', () => {
  let component: SwicthComponent;
  let fixture: ComponentFixture<SwicthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwicthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwicthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
