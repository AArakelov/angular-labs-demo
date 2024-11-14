import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsSsrDemoComponent } from './labs-ssr-demo.component';

describe('LabsSsrDemoComponent', () => {
  let component: LabsSsrDemoComponent;
  let fixture: ComponentFixture<LabsSsrDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabsSsrDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabsSsrDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
