import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsSignalComponent } from './labs-signal.component';

describe('LabsSignalComponent', () => {
  let component: LabsSignalComponent;
  let fixture: ComponentFixture<LabsSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabsSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabsSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
