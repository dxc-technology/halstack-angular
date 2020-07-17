import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertChildrenComponent } from './alert-children.component';

describe('AlertChildrenComponent', () => {
  let component: AlertChildrenComponent;
  let fixture: ComponentFixture<AlertChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
