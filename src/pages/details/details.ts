import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

	param : any;
  constructor(public navCtrl: NavController, public params: NavParams) {
  	this.param =  this.params.get('charakter'); 

  }


  ionViewDidLoad() {
  	
  }



}
