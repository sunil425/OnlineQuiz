import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;

  auth2:any
  res:any;
  showAlert=false
  validateUser = new FormGroup({
    password:new FormControl('', Validators.required),
    email:new FormControl('',Validators.required)

  })

  constructor(private userService:DataService,private router:Router,private route: ActivatedRoute , private ngZone:NgZone) { }

  ngOnInit(): void {
    this.fbLibrary();
    this.googleSDK();
    this.res= this.route.snapshot.paramMap.get('res')

    if(this.res=="the email is already registered"){
      this.showAlert=false
    }
    else{
      this.showAlert=true
    }

  }




loginUser(){
  this.userService.validateUser(this.validateUser.value).subscribe(
    res=>{
      console.log(res)
      if(res=="Invalid Details")
      {
        this.showAlert=true
      }
      else{      this.router.navigate(['/home',{res:res}]);  
    }

    },
    error=>{console.log(error)}
  )
  console.log(this.validateUser.value)
}

}
