import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsetTableComponent } from './resultset-table.component';

describe('ResultsetTableComponent', () => {
  let component: ResultsetTableComponent;
  let fixture: ComponentFixture<ResultsetTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsetTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
