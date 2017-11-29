import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RemoteDogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class RemoteDogServiceProvider {

    // Originally this was http: HttpClient
    constructor(public http: Http) {
        console.log('Hello RemoteDogServiceProvider Provider');
    }

    apiUrl: string = "http://127.0.0.1:8000/api/dogs";

    // Get all dogs
    getDogs() {
        return this.http.get(this.apiUrl).map(res => res.json());
    }

    // Show dog's info by ID
    showDog(id) {
        return this.http.get(this.apiUrl + "/" + id).map(res => res.json());
    }

    // Add a new dog
    createDog(data) {
        return  this.http.post(this.apiUrl, data).map((res) => res.json());
    }

    updateDog(id, newData){
        return this.http.put(this.apiUrl + "/" + id, newData).map(res => res.json());
    }

    deleteDog(id){
        return this.http.delete(this.apiUrl + "/" + id).map(res => res.json());
    }
}
