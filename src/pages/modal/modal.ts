import {Component} from '@angular/core';
import {App, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-modal',
    templateUrl: 'modal.html',
})
export class ModalPage {

    // Var to store dog's info
    dog: any;

    constructor(public navParams: NavParams,
                public navCtrl: NavController,
                private view: ViewController,
                private app: App) {

        // Save parametars passed from invoking page
        this.dog = this.navParams.get('dog');
        console.log(this.dog);
    }

    // Close modal on < button click
    closeModal() {
        this.view.dismiss().catch(() => console.log('view was not dismissed'));
        this.app.getRootNav().setRoot(TabsPage);
        // This causes refreshing of HomePage
        // this.navCtrl.setRoot(TabsPage);
    }

    ionViewDidLoad() {
        console.log('Modal loaded.');
    }

}
