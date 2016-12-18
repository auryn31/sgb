import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import {DetailsPage} from '../details/details'
import {Http} from '@angular/http';

import { NavController } from 'ionic-angular';
import {CharakterService} from '../../providers/charakter-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[CharakterService]
})
export class HomePage {

  items: Charakter[];
  loadedItems: Charakter[] = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public http: Http, public charakterService: CharakterService) {
  	this.createItemList();
  }

  ionViewDidLoad(){
  	
  }

  loadAllCharakters(){
   this.charakterService.load().then(data=>{   		
   		for(var charakterJSON of data) {
  			let newCharakter = new Charakter(charakterJSON);
  			this.loadedItems.push(newCharakter);
  		}        
        this.items = this.loadedItems;
   })
  }

  createItemList(){  	
  	if (typeof this.loadedItems[0] == 'undefined'){  		  	
  		this.loadAllCharakters();
  	} else {
  		this.items = this.loadedItems;
  	}  	
  }

  itemSelected(item){
  	this.navCtrl.push(DetailsPage, {'charakter':item})
  }

  getItems(ev: any) {
    this.createItemList();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}

class Charakter{
	name: String;
	url: String;
	mv: String;
	f: String;
	s: String;
	d: String;
	a: String;
	w: String;
	c: String;

	constructor(obj){
		this.name = obj.name;
		this.url = obj.url;
		this.mv = obj.mv;
		this.f = obj.f;
		this.s = obj.s;
		this.d = obj.d;
		this.a = obj.a;
		this.w = obj.w;
		this.c = obj.c;
	}
}


