import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() showSide = true

  selectedCourse!: Course;
  selectedCourses: Course[] = []
  @Input() showConfig = false;
  @Output() coursess = new EventEmitter<Course[]>();

  constructor(private courseService: CourseService,
    private toast: ToasterService) {

  }

  ngOnInit(): void {
    this.getInfo();
  }

  saveCourses() {
    this.coursess.emit(this.selectedCourses)
  }

  selectAll(){
    this.selectedCourses = [...this.courses]
    this.courses =[]
  }


  getInfo() {
    if(this.showConfig){

      if(this.courses){

        this.selectedCourses = [...this.courses];
        }
      this.courseService.listAll().subscribe({
        next: (value) => {
          this.courses = value.body;
        },
      })

    }else if (!this.courses) {
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

  drop(event: CdkDragDrop<Course[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
