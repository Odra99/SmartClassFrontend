import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/data/teacher';
import { ToasterService } from 'src/app/services/others/toaster.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit{
  teachers!: Teacher[];

  selectedTeacher!: Teacher;

  constructor(private teacherService: TeacherService,
    private toast: ToasterService) {

  }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    this.teacherService.listAll().subscribe({
      next: (value) => {
        this.teachers = value.body;
      },
    })
  }

  selectTeacher(area: any): void {
    this.selectedTeacher = area;
  }

}
