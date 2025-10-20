import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuItems } from './header-menu-items';

describe('HeaderMenuItems', () => {
  let component: HeaderMenuItems;
  let fixture: ComponentFixture<HeaderMenuItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMenuItems],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderMenuItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
