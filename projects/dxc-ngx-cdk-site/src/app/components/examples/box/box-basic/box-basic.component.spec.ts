import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxBasicComponent } from './box-basic.component';

describe('BoxBasicComponent', () => {
  let component: BoxBasicComponent;
  let fixture: ComponentFixture<BoxBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
