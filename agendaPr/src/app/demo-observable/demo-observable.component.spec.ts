import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoObservableComponent } from './demo-observable.component';

describe('DemoObservableComponent', () => {
  let component: DemoObservableComponent;
  let fixture: ComponentFixture<DemoObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
