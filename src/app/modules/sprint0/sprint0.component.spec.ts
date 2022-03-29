import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sprint0Component } from './sprint0.component';

describe('Sprint0Component', () => {
  let component: Sprint0Component;
  let fixture: ComponentFixture<Sprint0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sprint0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sprint0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
