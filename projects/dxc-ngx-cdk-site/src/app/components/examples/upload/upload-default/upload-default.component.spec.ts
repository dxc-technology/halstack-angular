import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDefaultComponent } from './upload-default.component';

describe('UploadDefaultComponent', () => {
  let component: UploadDefaultComponent;
  let fixture: ComponentFixture<UploadDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 
});
