import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'lib-button',
  template: `<button (click)="openAlert()">
    <ng-content></ng-content></button>`,
  styles: [ `button {background-color:#33adff; color:white;border:none;border-radius: 2px ;transition: 0.5s;padding:2px 5px 2px 5px;cursor: pointer;font-family: Helvetica, Arial, sans-serif;}`
 
  ]
})
export class ButtonComponent implements OnInit {

  
  constructor() {

   }

  ngOnInit(): void {
  }
openAlert(){
  alert("Trial Button");
}
}
