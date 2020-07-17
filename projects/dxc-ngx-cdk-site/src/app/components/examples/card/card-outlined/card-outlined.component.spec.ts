import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOutlinedComponent } from './card-outlined.component';

describe('CardOutlinedComponent', () => {
  let component: CardOutlinedComponent;
  let fixture: ComponentFixture<CardOutlinedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardOutlinedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOutlinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
