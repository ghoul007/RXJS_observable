import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGlobalComponent } from './test-global.component';

describe('TestGlobalComponent', () => {
  let component: TestGlobalComponent;
  let fixture: ComponentFixture<TestGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
