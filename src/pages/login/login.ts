import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') uname;
  @ViewChild('password') pass;

  constructor(private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  alert(message:string){
    let alert = this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  logIn(){
    console.log(this.uname.value,this.pass.value);

    this.fire.auth.signInWithEmailAndPassword(this.uname.value,this.pass.value)
    .then(data =>{
      console.log('logIn: ',this.fire.auth.currentUser);
      this.alert('Success!!..\' You are logged in');
      this.navCtrl.push(TabsPage);
    
    })
    .catch(error =>{
      console.log('Eror: ',error);
      this.alert(error.message );
    });
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }


}
