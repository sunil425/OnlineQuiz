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

  

  constructor(private router:Router,private route: ActivatedRoute    ) { }

  ngOnInit(): void {
   this.first_name= this.route.snapshot.paramMap.get('first_name')
   this.last_name= this.route.snapshot.paramMap.get('last_name')
   this.name= this.route.snapshot.paramMap.get('name')



   console.log(this.first_name,this.last_name,this.name)
  }

}
