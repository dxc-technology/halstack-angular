import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputMultiComponent } from './text-input-multi.component';

describe('TextInputMultiComponent', () => {
  let component: TextInputMultiComponent;
  let fixture: ComponentFixture<TextInputMultiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextInputMultiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
