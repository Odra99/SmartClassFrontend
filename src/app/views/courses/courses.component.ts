import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/data/course';
import { CourseService } from 'src/app/services/course.service';
import { ToasterService } from 'src/app/services/others/toaster.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

    @Input() courses!: Course[];
    @Input() showSide=false

  selectedCourse!: Course;
  selectedCourses:Course[]=[]
  showConfig=true;
  constructor(private courseService: CourseService,
    private toast: ToasterService) {

  }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    if(!this.courses){
      this.courseService.listAll().subscribe({
        next: (value) => {
          this.courses = value.body;
        },
      })
    }
  }

  selectCourse(classroom: any): void {
    this.selectedCourse = classroom;
  }

}
