import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayedAnimationComponent } from './delayed-animation.component';

describe('DelayedAnimationComponent', () => {
  let component: DelayedAnimationComponent;
  let fixture: ComponentFixture<DelayedAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelayedAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelayedAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
