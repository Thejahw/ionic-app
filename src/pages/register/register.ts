import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { AngularFireDatabase } from 'angularfire2/database';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('email') email;
  @ViewChild('password') pass;
  username:string;


  constructor(private db:AngularFireDatabase,private alertCtrl:AlertController,private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message:string){
    let alert = this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }


  register(){
    console.log("Register : ",this.email.value,this.pass.value);

    console.log(this.email.value,this.pass.value);
    this.fire.auth.createUserWithEmailAndPassword(this.email.value,this.pass.value)
    .then(data =>{
      console.log("Got data",data);
      this.alert('You have registered successfully');
      this.navCtrl.push(LoginPage);

      this.db.list('/user').push({
        username:this.username,
        email:this.email
        
      })
    })
    .catch(error =>{
      console.log("Error",error);
      this.alert(error.message);
    });
    console.log("Register : ",this.email.value,this.pass.value);
  }

}
