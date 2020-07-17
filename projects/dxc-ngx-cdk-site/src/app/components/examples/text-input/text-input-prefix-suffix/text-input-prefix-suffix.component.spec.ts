import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputPrefixSuffixComponent } from './text-input-prefix-suffix.component';

describe('TextInputPrefixSuffixComponent', () => {
  let component: TextInputPrefixSuffixComponent;
  let fixture: ComponentFixture<TextInputPrefixSuffixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextInputPrefixSuffixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputPrefixSuffixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
