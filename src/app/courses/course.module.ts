import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { StarModule } from '../shared/components/star/star.module';

import { CourseListComponent } from './course-list/course-list.component';
import { CourseInfoComponent } from './course-info/course-info.component';

import { PipeModule } from '../shared/pipes/pipe/pipe.module';

@NgModule({
  declarations: [CourseListComponent, CourseInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    PipeModule,
    RouterModule.forChild([
      {
        path: 'courses/info/:id',
        component: CourseInfoComponent,
      },
      {
        path: 'courses',
        component: CourseListComponent,
      },
    ]),
  ],
})
export class CourseModule {}
