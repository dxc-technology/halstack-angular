import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLinkedComponent } from './card-linked.component';

describe('CardLinkedComponent', () => {
  let component: CardLinkedComponent;
  let fixture: ComponentFixture<CardLinkedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardLinkedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLinkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
