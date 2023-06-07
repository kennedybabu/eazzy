import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportLandlordsComponent } from './import-landlords.component';

describe('ImportLandlordsComponent', () => {
  let component: ImportLandlordsComponent;
  let fixture: ComponentFixture<ImportLandlordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportLandlordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportLandlordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
