import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CharakterService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CharakterService {
	data:any;

  constructor(public http: Http) {
    console.log('Hello CharakterService Provider');
  }

  load(){
  	if(this.data){
  		return Promise.resolve(this.data);
  	}
  	// var url ="";
  	// if(ionic.Platform.isAndroid()){
  	// 	url = "/android_asset/www/";
  	// } else {
  	// 	if(ionic.Platform.isiOS()){
  	// 		url = "../www/";
  	// 	}
  	// }
  	return new Promise(resolve => {
  		this.http.get("/assets/data/figures.json").map(res => res.json()).subscribe(data => {  			
  			this.data = data.charakters;
  			resolve(this.data);
      	});
  	})
  }

}
