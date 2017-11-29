import {Component} from '@angular/core';
import {App, NavController} from 'ionic-angular';
import {NavParams} from 'ionic-angular';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RemoteDogServiceProvider} from "../../providers/remote-dog-service/remote-dog-service";
import {HomePage} from "../home/home";
import {TabsPage} from "../tabs/tabs";


@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {

    dog: any;
    data: any = {};
    createForm: FormGroup;

    constructor(public navParams: NavParams,
                public navCtrl: NavController,
                public dogProvider: RemoteDogServiceProvider,
                private app: App) {

        this.dog = navParams.get('dog');

        this.createForm = new FormGroup({
            name: new FormControl(),
            breed: new FormControl(),
            age: new FormControl(),
        });
    }


    createDog() {
        this.dogProvider.createDog(this.data).subscribe(
            data => {
                this.app.getRootNav().setRoot(TabsPage);
                console.log(data);
            },
            err => {
                console.log(err);
            },
            () => {
                console.log('Dog Creation Complete.')
            }
        );
    }
}
