import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import {DetailsPage} from '../details/details'
import {Http} from '@angular/http';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any;
  loadedItems: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public http: Http) {
  	this.createItemList();
  }

  ionViewDidLoad(){
  	
  }

  loadAllCharakters(){
  	this.http.get("/assets/data/figures.json").subscribe(data => {
        this.loadedItems = JSON.parse(data['_body']).charakters;
        this.items = this.loadedItems;
    });
  }

  createItemList(){  	
  	if (typeof this.loadedItems == "undefined"){  		  	
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
        return ((item.name).toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}


