/**
 * @author:Mayur Patel
 * @description: presentation component for the ui of form 
 */
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, ChangeDetectorRef, Input } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { Interview } from '../../interview.model';
import { ToastrService } from 'ngx-toastr';
import { InterviewFormPresenterService } from '../interview-presenter/interview-presenter.service';

@Component({
  selector: 'app-interview-ui',
  templateUrl: './interview-presentation.html',
  styleUrls: ['./interview-presentation.scss'],
  viewProviders: [InterviewFormPresenterService],
  preserveWhitespaces: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterviewPresentationComponent implements OnInit {

  /** formgroup for interview form form */
  public interviewDetailsFormGroup: FormGroup;
  public isFormSubmitted: boolean;

  public  file: File = null;
  /** input of sucess save data */
  @Input() public responseSubmit: any;
  /** Output of save interview details */
  @Output() public interviewDetails: EventEmitter<Interview>;

  constructor(private interviewFormPresenterService: InterviewFormPresenterService,
    private cdr: ChangeDetectorRef, private toasterService: ToastrService) {
    this.initProperty();
  }

  ngOnInit() {
  }
  /**
   * calls the method when select file
   */
  onSelect(event) {
    this.file = event.addedFiles[0]; 
    const fileAsBlob = new Blob([this.file]);
    this.interviewDetailsFormGroup.get('fileResume').setValue(fileAsBlob);
  }
/**
   * calls the method when select file remove
   */
  onRemove(event) {
    console.log(event);
    this.file =null 
    this.interviewDetailsFormGroup.get('fileResume').setValue(null);
  }
  /**
   * calls the method from presenter service and emits the output
   */
  public onSubmit(): void {
    this.isFormSubmitted = true;
    this.cdr.detectChanges();
    if (this.interviewDetailsFormGroup.valid) {
      const submit: Interview = this.interviewFormPresenterService.onSubmit(this.interviewDetailsFormGroup);
      this.interviewDetails.emit(submit);
      this.interviewDetailsFormGroup.reset();
      this.file =null ;
    } else {
      this.toasterService.error("error");
      return;
    }
  }

  /**
   * Inits property
   */
  private initProperty(): void {
    this.interviewDetails = new EventEmitter();
    this.interviewDetailsFormGroup = this.interviewFormPresenterService.buildForm();
  }

}
