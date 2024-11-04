import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerViewportComponent } from './trigger-viewport.component';

describe('TriggerViewportComponent', () => {
  let component: TriggerViewportComponent;
  let fixture: ComponentFixture<TriggerViewportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriggerViewportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriggerViewportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
