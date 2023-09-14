import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/data/course';
import { CourseService } from 'src/app/services/course.service';
import { ToasterService } from 'src/app/services/others/toaster.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses!: Course[];

  selectedCourse!: Course;

  constructor(private courseService: CourseService,
    private toast: ToasterService) {

  }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    this.courseService.listAll().subscribe({
      next: (value) => {
        this.courses = value.body;
      },
    })
  }

  selectCourse(classroom: any): void {
    this.selectedCourse = classroom;
  }

}
