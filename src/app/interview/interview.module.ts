/**
 * @author:Mayur Patel
 * @description: module file for the imports and declarations
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatePipe } from '@angular/common';

import { InterViewContainerRoutingModule } from './interview-routing.module';
import { InterViewContainerComponent } from './interview-container/interview-container';
import { InterviewPresentationComponent } from './interview-container/interview-presentation/interview-presentation';

import { NgxDropzoneModule } from 'ngx-dropzone';
@NgModule({
  declarations: [InterViewContainerComponent, InterviewPresentationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    InterViewContainerRoutingModule,
    NgxDropzoneModule
  ],
  providers: [DatePipe]
})
export class interviewFormModule { }
