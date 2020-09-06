import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
    first_name:any
    last_name:any
    name:any
    res:any;
    showAlert=false;

  

  constructor(private router:Router,private route: ActivatedRoute    ) { }

  ngOnInit(): void {
   this.first_name= this.route.snapshot.paramMap.get('first_name')
   this.last_name= this.route.snapshot.paramMap.get('last_name')
   this.name= this.route.snapshot.paramMap.get('name')
   this.res= this.route.snapshot.paramMap.get('res')



   if(this.first_name!==null && this.last_name!==null ){
     this.name=''

     this.showAlert=true
   }

   else if(this.name!==null){
     this.first_name='';
     this.last_name=''
     this.showAlert=true

   }

   else if(this.res=="Login Successfull"){
    this.name=''
    this.first_name='';
    this.last_name=''

     this.showAlert=true

  }

   else{
     this.showAlert=false
   }
   console.log(this.first_name,this.last_name,this.name,this.res)
  }



}
