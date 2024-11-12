import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsDiComponent } from './labs-di.component';

describe('LabsDiComponent', () => {
  let component: LabsDiComponent;
  let fixture: ComponentFixture<LabsDiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabsDiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabsDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
