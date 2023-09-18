import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesAssignmentsComponent } from './courses-assignments.component';

describe('CoursesAssignmentsComponent', () => {
  let component: CoursesAssignmentsComponent;
  let fixture: ComponentFixture<CoursesAssignmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesAssignmentsComponent]
    });
    fixture = TestBed.createComponent(CoursesAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
