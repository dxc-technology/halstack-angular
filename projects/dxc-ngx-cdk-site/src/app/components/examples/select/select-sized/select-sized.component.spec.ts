import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSizedComponent } from './select-sized.component';

describe('SelectSizedComponent', () => {
  let component: SelectSizedComponent;
  let fixture: ComponentFixture<SelectSizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
