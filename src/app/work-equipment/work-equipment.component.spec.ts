import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkEquipmentComponent } from './work-equipment.component';

describe('WorkEquipmentComponent', () => {
  let component: WorkEquipmentComponent;
  let fixture: ComponentFixture<WorkEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkEquipmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
