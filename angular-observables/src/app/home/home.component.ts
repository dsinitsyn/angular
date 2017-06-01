import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/Rx';
import { Observable, Observer, Subscription } from "rxjs";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
    numberObsSubscription: Subscription;
    customObsSubscription: Subscription;

    constructor(){
    }

    ngOnInit(){
        this.custom();
        this.interval();
    }

    custom(){
        const myObservable = Observable.create((observer: Observer<string>) =>{
            setTimeout(() => {
                observer.next('first package');
            }, 2000);

            setTimeout(() => {
                observer.next('second package');
            }, 4000);

            setTimeout(() => {
                //observer.error('this does not work');
                observer.complete();
            }, 6000);

            setTimeout(() => {
                observer.next('not emit');
            }, 6000);
        });

        this.customObsSubscription = myObservable.subscribe(
            (data: string) => {
                console.log(data);
            },
            (error: string) => {
                console.log(error);
            },
            () => {
                console.log('done');
            }
        )
    }

    interval(){
        const myNumbers = Observable.interval(100)
            .map(
                (data: number) => {
                    return data * 2;
                }
            );

        this.numberObsSubscription = myNumbers.subscribe(
            (number: number) =>{
                console.log(number);
            }
        );
    }


    ngOnDestroy(){
        this.numberObsSubscription.unsubscribe();
        this.customObsSubscription.unsubscribe();
    }

}
