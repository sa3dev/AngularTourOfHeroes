import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  //templateUrl: './child.component.html',
  
  template : `<h1>My second Component</h1>
  			<button (click)='save()' >Save ?</button>
        <input (input)="changeit($event.target.value)" >
        <p>{{movie}}</p>` ,
        
  			
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  movie="Prestige";

  constructor() { }

  save(){
  	console.log("Click saved !");
  }

  changeit( m ){
    this.movie = m;
  }

  ngOnInit() {
  }

}
