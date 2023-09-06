import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherConfigComponent } from './teacher-config.component';

describe('TeacherConfigComponent', () => {
  let component: TeacherConfigComponent;
  let fixture: ComponentFixture<TeacherConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherConfigComponent]
    });
    fixture = TestBed.createComponent(TeacherConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
