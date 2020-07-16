import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputDefaultComponent } from './text-input-default.component';

describe('TextInputDefaultComponent', () => {
  let component: TextInputDefaultComponent;
  let fixture: ComponentFixture<TextInputDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextInputDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
