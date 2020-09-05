import { Injectable } from '@angular/core';
import  {HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  addUser(addUser){
    return this.http.post('https://agile-island-73657.herokuapp.com/user/signup',addUser,{ responseType: 'text' as 'json' }
    );
  }

  validateUser(validateUser){
    return this.http.post('https://agile-island-73657.herokuapp.com/user/login',validateUser,{ responseType: 'text' as 'json' })
  }

}
