import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardThemedComponent } from './card-themed.component';

describe('CardThemedComponent', () => {
  let component: CardThemedComponent;
  let fixture: ComponentFixture<CardThemedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardThemedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardThemedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
