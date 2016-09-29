import { Component } from '@angular/core';
import {Http} from '@angular/http';
import  'rxjs/add/operator/map';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'something',
  templateUrl: './tictabtoe.component.html',
  styleUrls: ['./tictabtoe.component.css']
})
export class TictabtoeComponent {

  constructor(private http: Http) {
   this.getSomething();
  }
  @Input()
  something = 'start java server';

  public getSomething() {
    let url = '/rest/v1/ttt';
    this.http.get(url).map(res => res.text()).subscribe( (data) => {
      this.something = data;
    });
  }

}
