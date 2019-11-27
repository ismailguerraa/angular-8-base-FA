import { Component } from '@angular/core';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent {

  myCourse: string = 'learn angular';
  courses: string[] = ['Angular', 'Spring', 'Laravel'];

  addCourse() {
    this.courses.unshift(this.myCourse);
    this.myCourse = "";
  }

}
