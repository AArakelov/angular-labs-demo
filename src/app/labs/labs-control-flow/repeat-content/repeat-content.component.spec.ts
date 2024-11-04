import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatContentComponent } from './repeat-content.component';

describe('RepeatContentComponent', () => {
  let component: RepeatContentComponent;
  let fixture: ComponentFixture<RepeatContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepeatContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepeatContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
