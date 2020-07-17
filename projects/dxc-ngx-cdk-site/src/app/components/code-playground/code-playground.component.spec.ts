import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodePlaygroundComponent } from './code-playground.component';

describe('CodePlaygroundComponent', () => {
  let component: CodePlaygroundComponent;
  let fixture: ComponentFixture<CodePlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodePlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodePlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
