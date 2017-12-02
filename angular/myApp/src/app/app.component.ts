import { Component } from '@angular/core';


//tu prepare un composant et cest lui qui fait le lien 
@Component({
	
	//metadata
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
