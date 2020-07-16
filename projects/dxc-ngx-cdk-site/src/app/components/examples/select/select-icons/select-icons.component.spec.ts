import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectIconsComponent } from './select-icons.component';

describe('SelectIconsComponent', () => {
  let component: SelectIconsComponent;
  let fixture: ComponentFixture<SelectIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
