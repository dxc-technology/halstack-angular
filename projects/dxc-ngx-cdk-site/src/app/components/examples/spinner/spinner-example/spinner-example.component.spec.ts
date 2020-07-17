import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerExampleComponent } from './spinner-example.component';

describe('SpinnerExampleComponent', () => {
  let component: SpinnerExampleComponent;
  let fixture: ComponentFixture<SpinnerExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
