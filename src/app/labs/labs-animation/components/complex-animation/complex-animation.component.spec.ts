import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexAnimationComponent } from './complex-animation.component';

describe('ComplexAnimationComponent', () => {
  let component: ComplexAnimationComponent;
  let fixture: ComponentFixture<ComplexAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplexAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplexAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
