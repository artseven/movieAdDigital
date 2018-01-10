"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
    }
    HomePage.prototype.getToken = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        this.http.get('http://beta.movieaddigital.com/api2/', { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            _this.token = data.TOKEN;
            _this.code = data.CODE;
            console.log(_this.token);
        });
    };
    HomePage.prototype.postToken = function () {
        var _this = this;
        var headers = new http_1.Headers();
        this.http.get('http://beta.movieaddigital.com/api2/?token=' + this.token)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.message = data.MESSAGE;
            console.log(_this.message);
        });
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        })
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
