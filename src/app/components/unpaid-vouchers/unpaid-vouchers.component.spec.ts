import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpaidVouchersComponent } from './unpaid-vouchers.component';

describe('UnpaidVouchersComponent', () => {
  let component: UnpaidVouchersComponent;
  let fixture: ComponentFixture<UnpaidVouchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnpaidVouchersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnpaidVouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
