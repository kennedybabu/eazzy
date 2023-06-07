import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemittanceAnalysisComponent } from './remittance-analysis.component';

describe('RemittanceAnalysisComponent', () => {
  let component: RemittanceAnalysisComponent;
  let fixture: ComponentFixture<RemittanceAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemittanceAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemittanceAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
