import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentChartComponent } from './enrollment-chart.component';

describe('EnrollmentChartComponent', () => {
  let component: EnrollmentChartComponent;
  let fixture: ComponentFixture<EnrollmentChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollmentChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollmentChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
