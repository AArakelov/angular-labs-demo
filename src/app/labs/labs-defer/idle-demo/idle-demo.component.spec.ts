import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdleDemoComponent } from './idle-demo.component';

describe('IdleDemoComponent', () => {
  let component: IdleDemoComponent;
  let fixture: ComponentFixture<IdleDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdleDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
