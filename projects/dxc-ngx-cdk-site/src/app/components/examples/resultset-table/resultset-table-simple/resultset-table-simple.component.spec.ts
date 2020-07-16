import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsetTableSimpleComponent } from './resultset-table-simple.component';

describe('ResultsetTableSimpleComponent', () => {
  let component: ResultsetTableSimpleComponent;
  let fixture: ComponentFixture<ResultsetTableSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsetTableSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsetTableSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
