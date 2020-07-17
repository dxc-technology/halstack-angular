import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsetTableExampleComponent } from './resultset-table-example.component';

describe('ResultsetTableExampleComponent', () => {
  let component: ResultsetTableExampleComponent;
  let fixture: ComponentFixture<ResultsetTableExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsetTableExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsetTableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
