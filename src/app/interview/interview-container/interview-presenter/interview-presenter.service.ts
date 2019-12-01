/**
 * @author:Mayur Patel
 * @description: from group is created here
 */
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Interview } from '../../interview.model';
import { validateCharacters, validateOnlyNumber, validateEmail } from '../../validator/form.validator';


@Injectable({
  providedIn: 'root'
})
export class InterviewFormPresenterService {

  constructor(private fb: FormBuilder) { }
  
  /**
   * Builds form
   * @returns formbuilder
   */
  public buildForm(): FormGroup {
    return this.fb.group({
        firstname: ['', Validators.compose([Validators.required, validateCharacters])],
        lastname: ['', Validators.compose([Validators.required, validateCharacters])],
        address: ['', [Validators.required]],
        email: ['', [Validators.required, validateEmail]],
        contact: ['', Validators.compose([Validators.required, validateOnlyNumber])],
        fileResume:[null,[Validators.required]]
        
    });
  }  
  /**
   * submits the details and returns
   * @param interviewDetailsFormGroup : parameter to return details
   * @returns interview details
   */
  public onSubmit(interviewDetailsFormGroup: FormGroup): Interview {
    let submitDetails: Interview = new Interview();

    submitDetails.firstname=interviewDetailsFormGroup.value.firstname;
    submitDetails.lastname=interviewDetailsFormGroup.value.lastname;
    submitDetails.address=interviewDetailsFormGroup.value.address;
    submitDetails.email=interviewDetailsFormGroup.value.email;
    submitDetails.contact=interviewDetailsFormGroup.value.contact;
    submitDetails.fileResume=interviewDetailsFormGroup.value.fileResume;
   
    return submitDetails;
  }

  
}
