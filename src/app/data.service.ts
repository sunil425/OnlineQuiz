import { Injectable } from '@angular/core';
import  {HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getQues(){
    return this.http.get('../src/assets/test_data.json');
  }

}
