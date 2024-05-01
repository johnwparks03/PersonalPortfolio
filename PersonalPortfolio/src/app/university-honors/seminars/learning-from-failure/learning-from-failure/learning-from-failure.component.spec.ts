import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningFromFailureComponent } from './learning-from-failure.component';

describe('LearningFromFailureComponent', () => {
  let component: LearningFromFailureComponent;
  let fixture: ComponentFixture<LearningFromFailureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningFromFailureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearningFromFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
