import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWebComponent } from './test-web.component';

describe('TestWebComponent', () => {
  let component: TestWebComponent;
  let fixture: ComponentFixture<TestWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
