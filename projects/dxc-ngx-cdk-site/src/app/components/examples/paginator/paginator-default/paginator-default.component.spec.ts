import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorDefaultComponent } from './paginator-default.component';

describe('PaginatorDefaultComponent', () => {
  let component: PaginatorDefaultComponent;
  let fixture: ComponentFixture<PaginatorDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatorDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
