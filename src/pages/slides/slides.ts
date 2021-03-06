import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {


  token: string;
  message: any;
  images: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public http: Http
  ) {

    this.storage.get('token').then((val) => {
      this.token = val;
      console.log('This is my token', this.token);

    })
    setInterval(()=> {
     let headers = new Headers();
     headers.append('Access-Control-Allow-Origin', '*');

     this.http.get('http://beta.movieaddigital.com/api2/?token=' + this.token)
      .map(res=> res.json())
      .subscribe((data)=> {
        this.images = data.FILES;
        console.log(data);
    //     // this.goToNext(1, this.images[1].DATETIME);
    //     });
    //     if (Date.now() - (this.images[1].DATETIME)*1000 < 0) {
    //       this.slides.slideNext();
    //     }
    // }, 5000);
      });
    }, 5000);
  }


}
