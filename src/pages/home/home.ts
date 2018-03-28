import { Component } from '@angular/core';
import { NavController,NavParams,IonicPage } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username:string='';
  message:string='';
  s;
  messages:object[]=[];

  constructor(public navCtrl: NavController,private db:AngularFireDatabase,private navparams:NavParams) {
    this.username="Theja";
    this.s=this.db.list('/chat').valueChanges().subscribe(data =>{
      this.messages=data;
      
    });
  }

  sendMessage(){
    //console.log("buttonpressed")
     this.db.list('/chat').push({
       username:this.username,
       message:this.message
     })
 
   } 

 
}
