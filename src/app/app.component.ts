import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  ngOnInit() {
    // console.log(window.location.pathname);
    // if(window.location.pathname == '/localization/') {
    //   window.location.pathname = '/localization/en'
    // }
  }

}
