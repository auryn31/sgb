import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import {DetailsPage} from '../details/details'

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  	this.createItemList();
  }

  ionViewDidLoad(){
  	
  }

  createItemList(){
  	this.items = ["Golum", "usw"];
  }

  itemSelected(item){
  	this.navCtrl.push(DetailsPage, {'charakter':item})
  }

  getItems(ev: any) {
    this.createItemList();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
