import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSearch } from './text-search';

describe('TextSearch', () => {
  let component: TextSearch;
  let fixture: ComponentFixture<TextSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextSearch],
    }).compileComponents();

    fixture = TestBed.createComponent(TextSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
