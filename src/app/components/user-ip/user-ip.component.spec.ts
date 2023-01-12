import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIPComponent } from './user-ip.component';

describe('UserIPComponent', () => {
  let component: UserIPComponent;
  let fixture: ComponentFixture<UserIPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserIPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserIPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
