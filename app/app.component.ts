import { Component } from '@angular/core';
import { SimpsonDetailComponent } from './simpson-detail.component';
import { Simpson } from './simpson';


const SIMPSONS: Simpson[] = [
  { id: 11, name: 'Marge' },
  { id: 12, name: 'Bart' },
  { id: 13, name: 'Moe' },
  { id: 14, name: 'Nelson' },
  { id: 15, name: 'Lisa' },
  { id: 16, name: 'Maggie' },
  { id: 17, name: 'Lenny' },
  { id: 18, name: 'Apu' },
  { id: 19, name: 'Milhouse' },
  { id: 20, name: 'Homer' }
];

@Component({
  selector: 'my-app',
  template:`
  <h1>{{title}}</h1>
     <h2>The Simpsons</h2>
     <ul class="heroes">
       <li *ngFor="let simpson of simpsons"
         [class.selected]="simpson === selectedSimpson"
         (click)="onSelect(simpson)">
         <span class="badge">{{simpson.id}}</span> {{simpson.name}}
       </li>
     </ul>
     <my-simpson-detail [simpson]="selectedSimpson"></my-simpson-detail>`,
styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
directives: [SimpsonDetailComponent]
  })

export class AppComponent {
  title = 'Tour of Simpsons';
  simpsons = SIMPSONS;
  selectedSimpson: Simpson;

  onSelect(simpson: Simpson) { this.selectedSimpson = simpson; }
}
