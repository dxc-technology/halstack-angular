import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTablePropertiesComponent } from './header-table-properties.component';

describe('HeaderTablePropertiesComponent', () => {
  let component: HeaderTablePropertiesComponent;
  let fixture: ComponentFixture<HeaderTablePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTablePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTablePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
