import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplecellclickComponent } from './simplecellclick.component';

describe('SimplecellclickComponent', () => {
  let component: SimplecellclickComponent;
  let fixture: ComponentFixture<SimplecellclickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplecellclickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplecellclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
