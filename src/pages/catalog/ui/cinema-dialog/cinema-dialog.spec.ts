import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaDialog } from './cinema-dialog';

describe('CinemaDialog', () => {
  let component: CinemaDialog;
  let fixture: ComponentFixture<CinemaDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CinemaDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(CinemaDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
