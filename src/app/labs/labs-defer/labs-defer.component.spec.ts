import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsDeferComponent } from './labs-defer.component';

describe('LabsDeferComponent', () => {
  let component: LabsDeferComponent;
  let fixture: ComponentFixture<LabsDeferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabsDeferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabsDeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
