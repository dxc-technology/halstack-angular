import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderExampleComponent } from './header-example.component';

describe('HeaderExampleComponent', () => {
  let component: HeaderExampleComponent;
  let fixture: ComponentFixture<HeaderExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
