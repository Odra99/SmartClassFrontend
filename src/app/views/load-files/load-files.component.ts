import { Component, OnInit } from '@angular/core';
import { Files } from 'src/app/data/files';
import { FilesService } from 'src/app/services/files.service';
import { ToasterService } from 'src/app/services/others/toaster.service';
import { ToasterEnum } from 'src/global/toaster-enum';

@Component({
  selector: 'app-load-files',
  templateUrl: './load-files.component.html',
  styleUrls: ['./load-files.component.scss']
})
export class LoadFilesComponent implements OnInit {

  files!: Files
  constructor(private fileService: FilesService,
    private toast: ToasterService) {

  }

  ngOnInit(): void {

  }

  sendInfo() {
    if (this.files && this.files.areaCSV && this.files.classCSV && this.files.classScheduleCSV && this.files.courseAssignmentCSV
      && this.files.courseCSV && this.files.courseScheduleCSV && this.files.teacherCSV && this.files.teacherCourseCSV && this.files.teacherScheduleCSV) {
      this.fileService.save(this.files).subscribe({
        next: (value) => {
          this.toast.show({ message: "Informacion cargada correctamente", type: ToasterEnum.SUCCESS });
        }, error: () => {
          this.toast.show({ message: "Error", type: ToasterEnum.ERROR });

        }
      })
    }else{
      this.toast.show({ message: "Faltan archivos", type: ToasterEnum.ERROR });
    }

  }

  onFileChangeArea(event:any){
    this.files.areaCSV = event.target.files;
    console.log(event);
  }

  onFileChangeTeacher(event:any){
    this.files.teacherCSV = event.target.files;
    console.log(event);
  }
  onFileChangeCourse(event:any){
    this.files.courseCSV = event.target.files;
    console.log(event);
  }
  onFileChangeClass(event:any){
    this.files.classCSV = event.target.files;
    console.log(event);
  }
  onFileChangeTeacherSchedule(event:any){
    this.files.teacherScheduleCSV = event.target.files;
    console.log(event);
  }
  onFileChangeCourseSchedule(event:any){
    this.files.courseScheduleCSV = event.target.files;
    console.log(event);
  }
  onFileChangeClassSchedule(event:any){
    this.files.classScheduleCSV = event.target.files;
    console.log(event);
  }
  onFileChangeAssigned(event:any){
    this.files.courseAssignmentCSV = event.target.files;
    console.log(event);
  }
  onFileChangeTeacherCourse(event:any){
    this.files.teacherCourseCSV = event.target.files;
    console.log(event);
  }


}
