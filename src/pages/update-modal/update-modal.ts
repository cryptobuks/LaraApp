import {Component} from '@angular/core';
import {App, Events, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormControl, FormGroup} from "@angular/forms";
import {RemoteDogServiceProvider} from "../../providers/remote-dog-service/remote-dog-service";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the UpdateModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-update-modal',
    templateUrl: 'update-modal.html',
})
export class UpdateModalPage {

    dog: any;
    updateForm: FormGroup;

    constructor(public app: App,
                public navCtrl: NavController,
                public navParams: NavParams,
                public dogProvider: RemoteDogServiceProvider,
                private view: ViewController) {


        this.dog = this.navParams.get('dog');
        console.log(this.dog);

        this.updateForm = new FormGroup({
            name: new FormControl(),
            breed: new FormControl(),
            age: new FormControl(),
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad UpdateModalPage');
    }

    updateDog(){
        this.dogProvider.updateDog(this.dog.id, this.dog).subscribe(
            data => {
                this.navCtrl.setRoot('ModalPage', {dog: this.dog});
            },
            err => {
                console.log(err);
            },
            () => {
                console.log('Dog Update Complete.')
            }
        );
    }

    /* Close modal when < button in header is clicked. */
    closeModal() {
        this.view.dismiss().catch(() => console.log('view was not dismissed'));
        this.app.getRootNav().setRoot(TabsPage);
    }

}
