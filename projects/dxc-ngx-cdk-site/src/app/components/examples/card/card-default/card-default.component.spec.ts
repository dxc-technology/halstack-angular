import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDefaultComponent } from './card-default.component';

describe('CardDefaultComponent', () => {
  let component: CardDefaultComponent;
  let fixture: ComponentFixture<CardDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
