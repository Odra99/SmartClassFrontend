import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Teacher } from 'src/app/data/teacher';
import { ToasterService } from 'src/app/services/others/toaster.service';
import { TeacherService } from 'src/app/services/teacher.service';


@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  @Input() teachers!: Teacher[];
  @Input() showSide = true
  selectedTeachers: Teacher[] = [];
  selectedTeacher!: Teacher;
  @Input() showConfig = false;
  @Output() teacherss = new EventEmitter<Teacher[]>();

  constructor(private teacherService: TeacherService,
    private toast: ToasterService) {

  }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    if (!this.teachers) {
      this.teacherService.listAll().subscribe({
        next: (value) => {
          this.teachers = value.body;
        },
      })
    }
  }

  saveTeacher(){
    this.teacherss.emit(this.selectedTeachers)
  }

  selectTeacher(area: any): void {
    this.selectedTeacher = area;
  }

  drop(event: CdkDragDrop<Teacher[]>) {
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
