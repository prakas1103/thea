import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-start-page',
  templateUrl: './angular-start-page.component.html',
  styleUrls: ['../app.component.css']
})
export class AngularStartPageComponent implements OnInit {

  title = 'ui';
  constructor() { }

  ngOnInit(): void {
  }

}
