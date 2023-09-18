import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Classroom } from 'src/app/data/class';
import { ClassroomService } from 'src/app/services/classroom.service';
import { ToasterService } from 'src/app/services/others/toaster.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  @Input() classrooms!: Classroom[];
  @Input() showSide = true

  selectedClassroom!: Classroom;
  selectedClassrooms: Classroom[] = [];
  @Input() showConfig = false;
  @Output() classroomss = new EventEmitter<Classroom[]>();


  constructor(private classroomService: ClassroomService,
    private toast: ToasterService) {

  }

  ngOnInit(): void {
    this.getInfo();
  }

  saveClases(){
    this.classroomss.emit(this.selectedClassrooms)
  }

  getInfo() {
    if (!this.classrooms) {
      this.classroomService.listAll().subscribe({
        next: (value) => {
          this.classrooms = value.body;
        },
      })
    }
  }

  selectClassroom(classroom: any): void {
    this.selectedClassroom = classroom;
  }

  drop(event: CdkDragDrop<Classroom[]>) {
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
