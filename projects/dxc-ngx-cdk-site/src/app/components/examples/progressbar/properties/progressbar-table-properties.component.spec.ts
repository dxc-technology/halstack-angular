import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarTablePropertiesComponent } from './progressbar-table-properties.component';

describe('ProgressbarTablePropertiesComponent', () => {
  let component: ProgressbarTablePropertiesComponent;
  let fixture: ComponentFixture<ProgressbarTablePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressbarTablePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressbarTablePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
