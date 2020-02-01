import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataBaseService} from '../data-base.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { from } from 'rxjs';
import { IonMenu } from '@ionic/angular';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})

// name,rare,note,date,Lattitude,Longtitude
export class AddPostPage implements OnInit {
  data = {};
  NameChange = '';
  NoteChange = '';
  Rarity = 1;
  Long = null;
  Lat = null;
  start;
  end;
  GeolocationCheck = false;
  constructor(private database: DataBaseService,
              private router: Router,
              private geolocation: Geolocation
       ) {

  }



  ngOnInit() {
  }

  // Sets rarity
  RareChange(slide) {
    this.Rarity = slide.detail.value;


  }
  // chack for users geolocation
  SendGeo() {
    this.GeolocationCheck = !this.GeolocationCheck;

    if (this.GeolocationCheck === true) {
      this.geolocation.getCurrentPosition().then((resp) => {
        this.Lat = resp.coords.latitude;
        this.Long = resp.coords.longitude;

       }).catch((error) => {
         console.log('Error getting location', error);
       } );
      } else {
        this.Lat = null;
        this.Long = null;
      }
  }






  // go Back to Main page = home page
  GoBack() {
    this.router.navigate(['home']);
  }
  // wait function before sending (geolocation saving)
  wait(ms) {
    this.start = new Date().getTime();
    this.end = this.start;
    while (ms + this.start > this.end) {
      this.end = new Date().getTime();
    }

  }

  // submits new post/object and returns to Home page
  Submit() {
    this.wait(500);
    this.database.Download(this.NameChange, this.Rarity, this.NoteChange, this.Lat, this.Long);
    this.database.Storage();
    this.NameChange = '';
    this.NoteChange = '';
    this.Rarity = 1;

    this.router.navigate(['home']);
  }

}
