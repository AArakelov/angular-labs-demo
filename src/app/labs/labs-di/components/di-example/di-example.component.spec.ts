import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiExampleComponent } from './di-example.component';

describe('DiExampleComponent', () => {
  let component: DiExampleComponent;
  let fixture: ComponentFixture<DiExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
