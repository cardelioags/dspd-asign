import { Component, NgZone } from '@angular/core';

declare var gapi: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _zone: NgZone) { }
  ngAfterViewInit() {
    // Load the API client and auth2 library
  }
 
}