import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputFillParentComponent } from './text-input-fill-parent.component';

describe('TextInputFillParentComponent', () => {
  let component: TextInputFillParentComponent;
  let fixture: ComponentFixture<TextInputFillParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextInputFillParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputFillParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
