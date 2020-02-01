import { Injectable } from '@angular/core';
import {AddPostPage} from './add-post/add-post.page';


import { from } from 'rxjs';



// import { AddPostPage, AddPostPage, AddPostPage } from './add-post/add-post.page';
@Injectable({
  providedIn: 'root'
})
// name,rare,note,date
export class DataBaseService {

  private IndexData = [{name: 'Name'
  , rare: 3, note: 'Note', date: new Date().toISOString() , Long: null, Lat: null}];

  Download(BirdName, Rarity, PostNote, longtitude, latitude) {
    this.IndexData.push({name: BirdName, rare: Rarity, note: PostNote, date: new Date().toISOString(), Long: longtitude, Lat: latitude});
    // console.log(this.IndexData);
  }
  // Returns all object array
  Upload() {
    return this.IndexData;
  }
  // stores all object array localy
  Storage() {
    localStorage.setItem('SaveFile', JSON.stringify(this.IndexData));
  }
  // returns all data from local if data exist
  getSavetData() {
    if (localStorage.getItem('SaveFile') === null) {
      return this.IndexData;

    } else {
      return this.IndexData = JSON.parse(localStorage.getItem('SaveFile') );
    }
  }


}
