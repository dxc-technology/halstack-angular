import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputSizedComponent } from './text-input-sized.component';

describe('TextInputSizedComponent', () => {
  let component: TextInputSizedComponent;
  let fixture: ComponentFixture<TextInputSizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextInputSizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputSizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
