import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionallyContentComponent } from './conditionally-content.component';

describe('ConditionallyContentComponent', () => {
  let component: ConditionallyContentComponent;
  let fixture: ComponentFixture<ConditionallyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionallyContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionallyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
