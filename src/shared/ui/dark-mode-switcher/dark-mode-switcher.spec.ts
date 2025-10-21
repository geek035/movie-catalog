import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkModeSwitcher } from './dark-mode-switcher';

describe('DarkModeSwitcher', () => {
  let component: DarkModeSwitcher;
  let fixture: ComponentFixture<DarkModeSwitcher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkModeSwitcher],
    }).compileComponents();

    fixture = TestBed.createComponent(DarkModeSwitcher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
