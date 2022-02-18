import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkSectionComponent } from './dark-section.component';

describe('DarkSectionComponent', () => {
  let component: DarkSectionComponent;
  let fixture: ComponentFixture<DarkSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
