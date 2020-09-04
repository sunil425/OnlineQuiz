import { Component } from '@angular/core';
import { DataService } from './data.service';
import { SharingService } from './sharing.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineQuiz';

  
  
  constructor(private service :DataService,private shareService:SharingService) {}

  ngOnInit(): void {
     

  }




}
