import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputDarkComponent } from './text-input-dark.component';

describe('TextInputDarkComponent', () => {
  let component: TextInputDarkComponent;
  let fixture: ComponentFixture<TextInputDarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextInputDarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
