import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  token: string;
  message: string;
  code: string;
  constructor(
    public navCtrl: NavController,
    private http: Http
  ) {
   
  }

  getToken() {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    this.http.get('http://beta.movieaddigital.com/api2/', {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      console.log(data);
      this.token = data.TOKEN;
      this.code = data.CODE;
      console.log(this.token);
    });
  }

  postToken() {
    let headers = new Headers();
    this.http.get('http://beta.movieaddigital.com/api2/?token=' + this.token)
    .map(res => res.json())
    .subscribe(data => {
      this.message = data.MESSAGE;
      console.log(this.message);

    })
  }





}
