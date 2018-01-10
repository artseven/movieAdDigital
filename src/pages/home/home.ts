import { SlidesPage } from './../slides/slides';
import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  token: string;
  message: string;
  code: string;
  disabled: boolean = false;
  SlidesPage: any;
  constructor(
    public navCtrl: NavController,
    private http: Http,
    private storage: Storage
  ) {
   this.SlidesPage = SlidesPage;
  }

  getToken() {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    this.http.get('http://beta.movieaddigital.com/api2/', {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      console.log(data);
      this.storage.set('token', data.TOKEN);
      this.code = data.CODE;
    });
    this.disabled = true;
  }

  postToken() {
    let headers = new Headers();
    this.storage.get('token').then((val) => {
      this.token = val;
      console.log('This is my token', this.token);
      this.http.get('http://beta.movieaddigital.com/api2/?token=' + this.token)
        .map(res => res.json())
        .subscribe(data => {
          this.message = data.MESSAGE;
          console.log(this.message);
        })
    })
    
  }





}
