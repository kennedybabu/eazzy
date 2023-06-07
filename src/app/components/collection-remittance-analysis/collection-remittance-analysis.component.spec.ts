import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionRemittanceAnalysisComponent } from './collection-remittance-analysis.component';

describe('CollectionRemittanceAnalysisComponent', () => {
  let component: CollectionRemittanceAnalysisComponent;
  let fixture: ComponentFixture<CollectionRemittanceAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionRemittanceAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionRemittanceAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
