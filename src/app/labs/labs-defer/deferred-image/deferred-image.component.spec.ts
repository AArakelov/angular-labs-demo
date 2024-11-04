import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferredImageComponent } from './deferred-image.component';

describe('DeferredImageComponent', () => {
  let component: DeferredImageComponent;
  let fixture: ComponentFixture<DeferredImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferredImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferredImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
