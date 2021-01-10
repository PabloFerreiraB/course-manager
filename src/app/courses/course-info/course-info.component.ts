import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseService } from '../course.service';
import { Course } from '../course-list/course';

@Component({
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css'],
})
export class CourseInfoComponent implements OnInit {
  course!: Course;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.course = this.courseService.getById(
      Number(this.activatedRoute.snapshot.paramMap.get('id'))
    );
  }

  save(): void {
    this.courseService.save(this.course);
  }
}
