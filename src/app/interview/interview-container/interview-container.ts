/**
 * @author:Mayur Patel
 * @description: interview form container for service calls and pass data to presentation
 */
import { Component, OnInit } from '@angular/core';
import { InterViewFormService } from '../interview.service';
import { Interview } from '../interview.model';

@Component({
  selector: 'app-interview-container',
  templateUrl: './interview-container.html'
})
export class InterViewContainerComponent implements OnInit {

  public sucessMessage:any='';
  constructor(private interviewFormService: InterViewFormService) { }

  
  ngOnInit() {
  }
  
  /**
   * Subscribes the data to insert the record.
   * @param interviewDetails : to pass as a parameter 
   */
  public interviewSubmit(interviewDetails: Interview): void {
    console.log('called');
    
    this.interviewFormService.addinterviewData(interviewDetails).
      subscribe((response: any) => {

        console.log("successfully added",response);
        this.sucessMessage ='sucessfully added';
      },
      (err: any) => {
        this.sucessMessage= err;
        });
  }
}
