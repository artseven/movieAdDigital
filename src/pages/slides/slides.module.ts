import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlidesPage } from './slides';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    SlidesPage,
  ],
  imports: [
    IonicPageModule.forChild(SlidesPage),
    IonicStorageModule.forRoot()
  ],
})
export class SlidesPageModule {}
