import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsControlFlowComponent } from './labs-control-flow.component';

describe('LabsControlFlowComponent', () => {
  let component: LabsControlFlowComponent;
  let fixture: ComponentFixture<LabsControlFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabsControlFlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabsControlFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
