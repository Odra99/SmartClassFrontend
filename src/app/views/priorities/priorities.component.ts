import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Priority } from 'src/app/data/priorities';
import { ToasterService } from 'src/app/services/others/toaster.service';
import { PriorityService } from 'src/app/services/priorities.service';

@Component({
  selector: 'app-priorities',
  templateUrl: './priorities.component.html',
  styleUrls: ['./priorities.component.scss']
})
export class PrioritiesComponent implements OnInit {

  @Input() courses!: Priority[];
  @Input() showSide = true

  selectedCourse!: Priority;
  selectedCourses: Priority[] = []
  @Input() showConfig = false;

  @Output() priorities = new EventEmitter<Priority[]>();

  constructor(private priorityService: PriorityService,
    private toast: ToasterService) {

  }

  savePriorities() {
    this.priorities.emit(this.selectedCourses)
  }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    if(this.showConfig){

      if(this.courses){

        this.selectedCourses = [...this.courses];
        }
      this.priorityService.listAll().subscribe({
        next: (value) => {
          this.courses = value.body;
        },
      })

    }else if (!this.courses) {
      this.priorityService.listAll().subscribe({
        next: (value) => {
          this.courses = value.body;
        },
      })
    }
  }

  selectCourse(classroom: any): void {
    this.selectedCourse = classroom;
  }

  drop(event: CdkDragDrop<Priority[]>) {
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
