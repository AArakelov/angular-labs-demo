import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsComponentsComponent } from './labs-components.component';

describe('LabsComponentsComponent', () => {
  let component: LabsComponentsComponent;
  let fixture: ComponentFixture<LabsComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabsComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
