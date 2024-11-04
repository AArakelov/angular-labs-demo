import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsServicesComponent } from './labs-services.component';

describe('LabsServicesComponent', () => {
  let component: LabsServicesComponent;
  let fixture: ComponentFixture<LabsServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabsServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
