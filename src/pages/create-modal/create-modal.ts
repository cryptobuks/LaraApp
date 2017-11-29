import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormControl, FormGroup} from "@angular/forms";
import {RemoteDogServiceProvider} from "../../providers/remote-dog-service/remote-dog-service";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the CreateModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-create-modal',
    templateUrl: 'create-modal.html',
})
export class CreateModalPage {

    /* Must be included cause we are acessing data.[property] in html. */
    data: any = {};

    createForm: FormGroup;

    constructor(public navParams: NavParams,
                public navCtrl: NavController,
                private view: ViewController,
                public dogProvider: RemoteDogServiceProvider) {

        this.createForm = new FormGroup({
            name: new FormControl(),
            breed: new FormControl(),
            age: new FormControl(),
        });
    }

    /* Invoked on Submit with the inputted data.
    * Subscribe to provider's createDog function.
    * After finishing, go to ModalPage (show dog info) */
    createDog(data) {
        this.dogProvider.createDog(this.data).subscribe(
            data => {
                this.navCtrl.setRoot('ModalPage', {dog: this.data});
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
        this.navCtrl.setRoot(TabsPage);
    }

}
