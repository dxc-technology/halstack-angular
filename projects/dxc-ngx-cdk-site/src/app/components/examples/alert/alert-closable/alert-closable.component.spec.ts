import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertClosableComponent } from './alert-closable.component';

describe('AlertClosableComponent', () => {
  let component: AlertClosableComponent;
  let fixture: ComponentFixture<AlertClosableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertClosableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertClosableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
