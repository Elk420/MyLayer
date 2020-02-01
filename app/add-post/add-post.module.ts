import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPostPageRoutingModule } from './add-post-routing.module';

import { AddPostPage } from './add-post.page';
import {AppComponent} from '../app.component';

import { from } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@NgModule({
  imports: [


    CommonModule,
    FormsModule,
    IonicModule,

    AddPostPageRoutingModule
  ],

  declarations: [AddPostPage]
})
export class AddPostPageModule {}
