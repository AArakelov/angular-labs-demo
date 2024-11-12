import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsAnimationComponent } from './labs-animation.component';

describe('LabsAnimationComponent', () => {
  let component: LabsAnimationComponent;
  let fixture: ComponentFixture<LabsAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabsAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabsAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
