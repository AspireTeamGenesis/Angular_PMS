import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilehistoryComponent } from './profilehistory.component';

describe('ProfilehistoryComponent', () => {
  let component: ProfilehistoryComponent;
  let fixture: ComponentFixture<ProfilehistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilehistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
