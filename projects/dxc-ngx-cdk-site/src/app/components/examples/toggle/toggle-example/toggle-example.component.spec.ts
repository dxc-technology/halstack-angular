import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleExampleComponent } from './toggle-example.component';

describe('ToggleExampleComponent', () => {
  let component: ToggleExampleComponent;
  let fixture: ComponentFixture<ToggleExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
