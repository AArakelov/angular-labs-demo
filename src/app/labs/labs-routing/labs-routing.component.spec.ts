import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsRoutingComponent } from './labs-routing.component';

describe('LabsRoutingComponent', () => {
  let component: LabsRoutingComponent;
  let fixture: ComponentFixture<LabsRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabsRoutingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabsRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
