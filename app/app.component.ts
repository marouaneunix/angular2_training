import { Component } from '@angular/core';

class Hero  {

	id: number;
	name: string;

	constructor(id:number, name:string){
		this.id= id;
		this.name = name;
	}
}

@Component({
  selector: 'my-app',
  template: `
  	<h1>{{title}}</h1>
  	<h2>{{hero.name}} details!!</h2>
	<div><label>id: </label>{{hero.id}}</div>
	<div>
  		<label>name: </label>
		<input [(ngModel)]="hero.name" placeholder="name">
  	</div>
  `
})

export class AppComponent{
	title = 'Tour of Heroes';
	hero = new Hero(1,"hero_1");
}
