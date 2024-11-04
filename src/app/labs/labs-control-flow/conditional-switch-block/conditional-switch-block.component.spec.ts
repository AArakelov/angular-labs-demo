import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalSwitchBlockComponent } from './conditional-switch-block.component';

describe('ConditionalSwitchBlockComponent', () => {
  let component: ConditionalSwitchBlockComponent;
  let fixture: ComponentFixture<ConditionalSwitchBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionalSwitchBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionalSwitchBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
