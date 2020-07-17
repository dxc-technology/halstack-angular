import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTablePropertiesComponent } from './upload-table-properties.component';

describe('UploadTablePropertiesComponent', () => {
  let component: UploadTablePropertiesComponent;
  let fixture: ComponentFixture<UploadTablePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadTablePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadTablePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
