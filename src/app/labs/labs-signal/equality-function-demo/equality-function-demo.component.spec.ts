import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqualityFunctionDemoComponent } from './equality-function-demo.component';

describe('EqualityFunctionDemoComponent', () => {
  let component: EqualityFunctionDemoComponent;
  let fixture: ComponentFixture<EqualityFunctionDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EqualityFunctionDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EqualityFunctionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
