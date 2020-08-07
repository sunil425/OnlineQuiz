import { Injectable } from '@angular/core';
import  {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getQues(){
    return this.http.get('https://testapi.io/api/dayamoymaji14/test_data');
  }

}
