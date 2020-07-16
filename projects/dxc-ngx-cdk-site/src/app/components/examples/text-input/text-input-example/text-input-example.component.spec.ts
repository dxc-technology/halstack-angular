import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputExampleComponent } from './text-input-example.component';

describe('TextInputExampleComponent', () => {
  let component: TextInputExampleComponent;
  let fixture: ComponentFixture<TextInputExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextInputExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
