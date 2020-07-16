import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadExampleComponent } from './upload-example.component';

describe('UploadExampleComponent', () => {
  let component: UploadExampleComponent;
  let fixture: ComponentFixture<UploadExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
