import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemittanceBadDebtsComponent } from './remittance-bad-debts.component';

describe('RemittanceBadDebtsComponent', () => {
  let component: RemittanceBadDebtsComponent;
  let fixture: ComponentFixture<RemittanceBadDebtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemittanceBadDebtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemittanceBadDebtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
