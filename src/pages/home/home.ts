import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {RemoteDogServiceProvider} from "../../providers/remote-dog-service/remote-dog-service";
import {ModalController} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    doRefresh(refresher) {
        console.log('Begin async operation ', refresher);

        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000)
    }

    constructor(public navCtrl: NavController,
                public dogProvider: RemoteDogServiceProvider,
                public modal: ModalController,
                public toastCtrl: ToastController) {

        // Call function to invoke Provider
        this.getDogs();
    }

    dogList: Array<any>;

    // Subscribe to provider's function and get results
    // Note: usually data received is this.dogList = data.results;
    getDogs() {
        this.dogProvider.getDogs().subscribe(
            data => {
                this.dogList = data;
                // console.log(data);
            },
            err => {
                this.presentToast();

                console.log(err);
            },
            () => console.log('Dog Listing Complete')
        );
    }

    presentToast(){
        let toast = this.toastCtrl.create({
            message: 'Error in getting the dogs',
            duration: 3000
        });
        toast.present();

    }


    showDog(id) {
        // let dog : any;
        this.dogProvider.showDog(id).subscribe(
            (data) => {
                // this.navCtrl.push('ModalPage', { dog: data });
                const dogModal = this.modal.create('ModalPage', {dog: data});
                dogModal.present();
            },
            error => {
                console.log(error);
            },
            () => console.log('Dog showing complete.')
        );
    }

    updateDog(data) {
        const dogModal = this.modal.create('UpdateModalPage', {dog: data});
        dogModal.present();
    }

    deleteDog(id) {
        this.dogProvider.deleteDog(id).subscribe(
            (data) => {
                this.navCtrl.setRoot(TabsPage);
                console.log(data);
            },
            error => {
                console.log(error);
            },
            () => {
                // this.navCtrl.setRoot(TabsPage);
                console.log("Dog deletion complete.")
            }
        )
    }

    createDog() {
        const dogModal = this.modal.create('CreateModalPage');
        dogModal.present();
    }


}
