import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityHonorsComponent } from './university-honors.component';

describe('UniversityHonorsComponent', () => {
  let component: UniversityHonorsComponent;
  let fixture: ComponentFixture<UniversityHonorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniversityHonorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniversityHonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
