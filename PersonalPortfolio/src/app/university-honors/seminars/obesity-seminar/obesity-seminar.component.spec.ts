import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObesitySeminarComponent } from './obesity-seminar.component';

describe('ObesitySeminarComponent', () => {
  let component: ObesitySeminarComponent;
  let fixture: ComponentFixture<ObesitySeminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObesitySeminarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObesitySeminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
