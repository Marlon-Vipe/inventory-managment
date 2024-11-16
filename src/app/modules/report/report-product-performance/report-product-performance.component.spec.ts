import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProductPerformanceComponent } from './report-product-performance.component';

describe('ReportProductPerformanceComponent', () => {
  let component: ReportProductPerformanceComponent;
  let fixture: ComponentFixture<ReportProductPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportProductPerformanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportProductPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
