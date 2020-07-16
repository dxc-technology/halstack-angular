import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputTablePropertiesComponent } from './text-input-table-properties.component';

describe('TextInputTablePropertiesComponent', () => {
  let component: TextInputTablePropertiesComponent;
  let fixture: ComponentFixture<TextInputTablePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextInputTablePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputTablePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
