import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTablePropertiesComponent } from './card-table-properties.component';

describe('CardTablePropertiesComponent', () => {
  let component: CardTablePropertiesComponent;
  let fixture: ComponentFixture<CardTablePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTablePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTablePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
