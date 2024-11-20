import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsRxjsComponent } from './labs-rxjs.component';

describe('LabsRxjsComponent', () => {
  let component: LabsRxjsComponent;
  let fixture: ComponentFixture<LabsRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabsRxjsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabsRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
