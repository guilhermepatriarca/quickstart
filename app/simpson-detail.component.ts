import { Component, Input } from '@angular/core';
import { Simpson } from './simpson';

@Component({
  selector: 'my-simpson-detail',
  template:`<div *ngIf="simpson">
  <h2>{{simpson.name}} Details!</h2>
  <div><label>id: </label>{{simpson.id}}</div>
  <div>
  <label>Name: </label>
  <input [(ngModel)]="simpson.name" placeholder="name"/>
  </div>
  </div>`
})
export class SimpsonDetailComponent {
  @Input()
  simpson : Simpson;
}
