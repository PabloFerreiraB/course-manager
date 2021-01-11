import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';

import { Course } from './course';

@Component({
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  filteredCourses: Course[] = [];
  _courses: Course[] = [];
  _filterBy!: string;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.courseService.getAll().subscribe({
      next: (courses) => {
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error: (err) => console.log('Error', err),
    });
  }

  deleteById(id: number): void {
    this.courseService.deleteById(id).subscribe({
      next: () => {
        console.log('Deleted with success');
        this.getAll();
      },
      error: (err) => {
        console.log('Error', err);
      },
    });
  }

  get filter() {
    return this._filterBy;
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredCourses = this._courses.filter(
      (course: Course) =>
        course
          .name!.toLocaleLowerCase()
          .indexOf(this._filterBy.toLocaleLowerCase()) > -1
    );
  }
}
