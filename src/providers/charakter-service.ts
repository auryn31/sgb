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
  	// /assets/data/figures.json
  	return new Promise(resolve => {
  		this.http.get("/api").map(res => res.json()).subscribe(data => {  	
  			console.log(data);		
  			this.data = data.charakters;
  			console.log(data);
  			resolve(this.data);
      	});
  	})
  }

}
