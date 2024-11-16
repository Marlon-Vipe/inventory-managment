import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAlertsComponent } from './inventory-alerts.component';

describe('InventoryAlertsComponent', () => {
  let component: InventoryAlertsComponent;
  let fixture: ComponentFixture<InventoryAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryAlertsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
