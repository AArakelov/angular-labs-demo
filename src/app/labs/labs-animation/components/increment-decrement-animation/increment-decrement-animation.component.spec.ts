import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementDecrementAnimationComponent } from './increment-decrement-animation.component';

describe('IncrementDecrementAnimationComponent', () => {
  let component: IncrementDecrementAnimationComponent;
  let fixture: ComponentFixture<IncrementDecrementAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncrementDecrementAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncrementDecrementAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
