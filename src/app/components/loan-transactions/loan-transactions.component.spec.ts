import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanTransactionsComponent } from './loan-transactions.component';

describe('LoanTransactionsComponent', () => {
  let component: LoanTransactionsComponent;
  let fixture: ComponentFixture<LoanTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
