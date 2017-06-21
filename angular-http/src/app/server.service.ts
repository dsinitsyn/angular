import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";


@Injectable()
export class ServerService {

    constructor(private http: Http){
    }

    storeServers(servers: any[]){
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put('https://http-service-3c0d6.firebaseio.com/data.json', servers, {headers});
    }

    getServers(){
        return this.http.get('https://http-service-3c0d6.firebaseio.com/data.json')
            .map((response) =>{
                const data = response.json();
                for (const server of data) {
                    server.name = 'FETCHED_ ' + server.name;
                }
                return data;
            }).catch((error) =>{
                return Observable.throw('Something went wrong');
            });
    }

    getAppName(){
        return this.http.get('https://http-service-3c0d6.firebaseio.com/appName.json')
            .map((response) =>{
                return response.json();
            });
    }
}