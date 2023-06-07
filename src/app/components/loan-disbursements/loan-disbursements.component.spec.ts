import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDisbursementsComponent } from './loan-disbursements.component';

describe('LoanDisbursementsComponent', () => {
  let component: LoanDisbursementsComponent;
  let fixture: ComponentFixture<LoanDisbursementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanDisbursementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanDisbursementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
