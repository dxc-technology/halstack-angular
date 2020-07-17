import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSimpleComponent } from './table-simple.component';

describe('TableSimpleComponent', () => {
  let component: TableSimpleComponent;
  let fixture: ComponentFixture<TableSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
