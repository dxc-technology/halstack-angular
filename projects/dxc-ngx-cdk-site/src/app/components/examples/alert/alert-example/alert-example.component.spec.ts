import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertExampleComponent } from './alert-example.component';

describe('AlertExampleComponent', () => {
  let component: AlertExampleComponent;
  let fixture: ComponentFixture<AlertExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
