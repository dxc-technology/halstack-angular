import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxExampleComponent } from './box-example.component';

describe('BoxExampleComponent', () => {
  let component: BoxExampleComponent;
  let fixture: ComponentFixture<BoxExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
