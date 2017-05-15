import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>Hello {{name}}</h1>
    <p> Email:{{email}}</p>
    <p><strong>Address:</strong>{{address.street}} {{address.city}}, {{address.state}}
    <h1>Hobbies</h1>
    <button (click)="togglehobbies()">{{showHobbies?"Hide Hobbies":"Show Hobbies"}}</button>
    <div *ngIf="showHobbies">
    <ul>
        <li *ngFor="let hobby of hobbies">
        {{hobby}}
        </li>
    </ul>
    </div>`

,
})
export class UserComponent  { 
  name:String; 
  email:string;
  address:address;
  hobbies:string[];
  showHobbies:boolean;
  constructor(){
      console.log('costructor ran');
      this.name='sriram';
      this.email='ram369k@gmail.com';
       this.address={
            street:'polur Ap 1-233',
            city:'guntur',
            state:'AP'
  }
  this.hobbies=['playing','Eating','Traveling'];
  this.showHobbies=false;
}
togglehobbies(){
    if(this.showHobbies==false){
         this.showHobbies=true;
    }else{
    this.showHobbies=false;
    }
}
}
interface address{
    street:string;
    city:string;
    state:string;
}
