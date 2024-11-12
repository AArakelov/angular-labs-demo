import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsNgrxComponent } from './labs-ngrx.component';

describe('LabsNgrxComponent', () => {
  let component: LabsNgrxComponent;
  let fixture: ComponentFixture<LabsNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabsNgrxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabsNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
