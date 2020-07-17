import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxTablePropertiesComponent } from './box-table-properties.component';

describe('BoxTablePropertiesComponent', () => {
  let component: BoxTablePropertiesComponent;
  let fixture: ComponentFixture<BoxTablePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxTablePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxTablePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
