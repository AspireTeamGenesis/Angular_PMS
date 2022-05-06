import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Changepassword1Component } from './changepassword1.component';

describe('Changepassword1Component', () => {
  let component: Changepassword1Component;
  let fixture: ComponentFixture<Changepassword1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Changepassword1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Changepassword1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
