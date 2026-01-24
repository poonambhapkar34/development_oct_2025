import { Component } from '@angular/core';

@Component({
  selector: 'app-learntypescript',
  templateUrl: './learntypescript.component.html',
  styleUrls: ['./learntypescript.component.css']
})
export class LearntypescriptComponent {
//variabe: It is container which will be used to store data(any data type)
// data types : number,boolean , string,null, undefined,object any etc
//keywords let, var, const , var default 
// var/ let/ const 
//Variable names can contain alphabets and numeric digits.
//They cannot contain spaces and special characters, except the underscore (_) and the dollar (&dollar;) sign.
//Variable names cannot begin with a digit.
// var/let/ const amount : number =21
    amount : number = 11; //not int
    amount1 = 10;
    isReady = true;
    marks:undefined;
    mark!:null;
}
