import { Component } from '@angular/core';
import {DataBaseService} from '../data-base.service';
import { Route } from '@angular/compiler/src/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

// name,rare,note,date

export class HomePage {
  data = [{name: 'nimi'
  , rare: 1, note: 'kommentti', date: new Date().toISOString(), Long: 0, Lat: 0}];
  // Sets all adta before prosessing functions and opens local store data
  constructor(private database: DataBaseService, private router: Router ) {
    this.data = this.database.getSavetData();
    this.data.sort((a, b) => (a.date > b.date) ? -1 : 1);
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.data = this.database.getSavetData();
  }
  // link to Add-post page
  GoToAdd() {
    // console.log('seuraavasivu');
    this.router.navigate(['add-post']);
  }
  // Sorts object array whit users passed char
  SortingConsole(a) {
    if ( a.detail.value === 'D') {
      this.SortByDate();
    } else if ( a.detail.value === 'R') {
      this.SortByRare();
    } else if (a.detail.value === 'N') {
      this.SortByName();
    } else if (a.detail.value === 'U') {
      this.SortByNote();
    }

  }
  // All functions for sorting object list
  SortByDate() {
    /// console.log("date")
    this.data.sort((a, b) => (a.date > b.date) ? -1 : 1);
  }
  SortByRare() {
    /// console.log("raritysort")
    this.data.sort((a, b) => (a.rare > b.rare) ? -1 : 1);
  }
  SortByName() {
    /// console.log("name")
    this.data.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1);
  }
  SortByNote() {
    /// console.log("notesort")
    this.data.sort((a, b) => (a.note.toLowerCase() > b.note.toLowerCase()) ? 1 : -1);
  }



}



