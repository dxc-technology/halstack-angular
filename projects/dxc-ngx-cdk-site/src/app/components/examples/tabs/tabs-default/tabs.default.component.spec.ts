import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsDefaultComponent } from './tabs-default.component';

describe('TabsDefaultComponent', () => {
  let component: TabsDefaultComponent;
  let fixture: ComponentFixture<TabsDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 
});
