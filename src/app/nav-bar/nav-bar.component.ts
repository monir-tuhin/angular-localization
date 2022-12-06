import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  siteLanguage = 'English';
  siteLocale = 'en';
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
  ];

  baseUrl = environment.baseUrl;

  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log('baseUrl :', this.baseUrl);
    console.log('location :', window.location);
    const localeTemp: string = window.location.pathname.split('/')[1];
    this.siteLocale = localeTemp ? localeTemp : this.siteLocale;
    const selectedLanguage = this.languageList
      .find((language) => language.code === this.siteLocale)
      ?.label.toString();

    if (selectedLanguage) {
      this.siteLanguage = selectedLanguage;
    }
  }
}
