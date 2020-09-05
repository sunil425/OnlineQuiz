import { Injectable } from '@angular/core';
import  {HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  addUser(addUser){
    return this.http.post('http://localhost:8080/user/signup',addUser,{ responseType: 'text' as 'json' }
    );
  }

  validateUser(validateUser){
    return this.http.post('http://localhost:8080/user/login',validateUser,{ responseType: 'text' as 'json' })
  }

}
