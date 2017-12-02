import { Component, OnInit, ViewEncapsulation } from '@angular/core';
 
@Component({
  selector: 'app-hello',
  //templateUrl: './hello.component.html',

  template: `<h1>My first component with angular</h1>
                <app-child></app-child>
                <app-frame>Voici le message de l'application du composent Hello</app-frame>
                <p>@Copyright 2017</p>` ,

  styleUrls: ['./hello.component.css'],
  //encapsulation: ViewEncapsulation.Native  enlevé ou mettre a none la vue de l'encapsulation
})
export class HelloComponent implements OnInit {

	//chose a faire en premier declarer un attribut 
	name:string = "Said test d'angular"; 

	//dclarer le name dans le ngOninit()
	//declarer dans html le nom de la variable name

  constructor() { }

  ngOnInit() {

  	//var name = "Said test d'angular";

  }

}
