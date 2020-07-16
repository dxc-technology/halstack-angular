import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTablePropertiesComponent } from './footer-table-properties.component';

describe('FooterTablePropertiesComponent', () => {
  let component: FooterTablePropertiesComponent;
  let fixture: ComponentFixture<FooterTablePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterTablePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTablePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
