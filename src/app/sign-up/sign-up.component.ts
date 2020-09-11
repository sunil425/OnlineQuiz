import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;

  auth2:any
  res:any
  showAlert=false

  constructor(private userService:DataService ,private router:Router ,private ngZone: NgZone) { }

  ngOnInit(): void {
    this.fbLibrary();
    this.googleSDK();
  }

 

  addUser = new FormGroup({
    name:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required)

  })


  login() {
 
    window['FB'].login((response) => {
        console.log('login response',response);
        if (response.authResponse) {
 
          window['FB'].api('/me', {
            fields: 'last_name, first_name, email'
          }, (userInfo) => {
 
            console.log("user information");
            console.log(userInfo);

            this.ngZone.run(()=>this.router.navigate(['/home',userInfo]));  


          });
           
        } else {
          console.log('User login failed');
        }
    }, {scope: 'email'});
}


prepareLoginButton() {
 
  this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
    (googleUser) => {
 
      let profile = googleUser.getBasicProfile();
      console.log('Token || ' + googleUser.getAuthResponse().id_token);
      console.log('ID: ' + profile.getId());
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());
      this.ngZone.run(()=>this.router.navigate(['/home',{name:profile.getName()}]));  
 
 
    }, (error) => {
      alert(JSON.stringify(error, undefined, 2));
    });
 
}

 

  registerUser(){
    
    this.userService.addUser(this.addUser.value).subscribe(
      res=>{

        console.log(res)

        if(res=="the email is already registered")
        {
          this.showAlert=true
        }
        else{      this.router.navigate(['/home',{res:res}]);  
      }

      },
      error=>{console.log(error)}
    )
    console.log(this.addUser.value)
  }
}
