import {Component} from '@angular/core';
import {App, IonicPage, NavParams, ViewController} from 'ionic-angular';
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

    dog: any;

    constructor(public navParams: NavParams,
                private view: ViewController,
                private app: App) {

        this.dog = this.navParams.get('dog');
        console.log(this.dog);
    }

    closeModal() {
        this.view.dismiss().catch(() => console.log('view was not dismissed'));
        this.app.getRootNav().setRoot(TabsPage);
    }

    ionViewDidLoad() {
        console.log('Modal loaded.');
    }

}
