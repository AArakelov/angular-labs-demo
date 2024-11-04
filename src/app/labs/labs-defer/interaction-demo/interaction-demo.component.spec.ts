import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionDemoComponent } from './interaction-demo.component';

describe('InteractionDemoComponent', () => {
  let component: InteractionDemoComponent;
  let fixture: ComponentFixture<InteractionDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractionDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
