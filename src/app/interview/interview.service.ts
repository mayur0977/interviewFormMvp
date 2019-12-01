/**
 * @author:Mayur Patel
 * @description: service for the http calls
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Interview } from './interview.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterViewFormService {

  private baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  /**
   * Adds interview data
   * @param interviewDetails : body of the post call
   * @returns interview observable of type interview
   */
  public addinterviewData(interviewDetails: Interview): Observable<Interview> {
    const url: string = this.baseUrl + 'Interview';

    // const formData = new FormData();
    // formData.set('firstname', interviewDetails.fileResume);
    // formData.set('lastname', interviewDetails.lastname);
    // formData.set('email', interviewDetails.email);
    // formData.set('address', interviewDetails.address);
    // formData.set('contact', interviewDetails.contact);
    // formData.set('fileResume', interviewDetails.fileResume);
    // console.log(interviewDetails);
    // console.log(formData);
    // var options = { content: formData };
    return this.http.post<any>(url, interviewDetails);
  }

  /** This will get the record by id from database */
  public getinterviewDataById(id: string): Observable<Interview> {
    const url = this.baseUrl + 'Interview/' + id;
    return this.http.get<Interview>(url);
  }
}
