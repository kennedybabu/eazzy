import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordsListComponent } from './landlords-list.component';

describe('LandlordsListComponent', () => {
  let component: LandlordsListComponent;
  let fixture: ComponentFixture<LandlordsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandlordsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandlordsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
