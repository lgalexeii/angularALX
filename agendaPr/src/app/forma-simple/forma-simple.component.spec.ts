import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaSimpleComponent } from './forma-simple.component';

describe('FormaSimpleComponent', () => {
  let component: FormaSimpleComponent;
  let fixture: ComponentFixture<FormaSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
