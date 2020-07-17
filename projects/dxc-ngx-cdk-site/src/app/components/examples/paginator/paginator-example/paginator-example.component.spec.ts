import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorExampleComponent } from './paginator-example.component';

describe('PaginatorExampleComponent', () => {
  let component: PaginatorExampleComponent;
  let fixture: ComponentFixture<PaginatorExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatorExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
