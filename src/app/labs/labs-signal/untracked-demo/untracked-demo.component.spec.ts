import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UntrackedDemoComponent } from './untracked-demo.component';

describe('UntrackedDemoComponent', () => {
  let component: UntrackedDemoComponent;
  let fixture: ComponentFixture<UntrackedDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UntrackedDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UntrackedDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
