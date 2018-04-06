import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
//import pages


@IonicPage()
@Component({
  selector: 'page-datacontrol',
  templateUrl: 'datacontrol.html',
})
export class DatacontrolPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatacontrolPage');
  }
// viewdata(){
  //   this.navCtrl.push(/*view data page*/);

  // }

  // adddata(){
  //   this.navCtrl.push(/*view data page*/);

  // }

  // removedata(){
  //   this.navCtrl.push(/*view data page*/);
  // }

  logout(){
    const root=this.app.getRootNav();
    root.popToRoot();
  }
}
