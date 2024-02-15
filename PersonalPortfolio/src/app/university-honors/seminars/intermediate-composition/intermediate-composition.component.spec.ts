import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateCompositionComponent } from './intermediate-composition.component';

describe('IntermediateCompositionComponent', () => {
  let component: IntermediateCompositionComponent;
  let fixture: ComponentFixture<IntermediateCompositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntermediateCompositionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntermediateCompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
