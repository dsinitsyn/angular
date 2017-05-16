import {
    Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck,
    AfterContentInit, AfterContentChecked, ViewChild, ElementRef, AfterViewInit, ContentChild
} from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit {

    @Input('srvElement') element: {type: string, name: string, content: string};
    @ViewChild('heading') header: ElementRef;
    @ContentChild('contentParagraph') pargraph: ElementRef;

    constructor(){
        console.log('constructor called!');
    }

    ngOnInit(){ 
        console.log('ngOnInit called!');
        console.log('textContent: ' + this.header.nativeElement.textContent);
        console.log('paragraphContent: ' + this.pargraph.nativeElement.textContent);
    }

    ngOnChanges(changes: SimpleChanges){ 
        console.log('ngOnChanges called!');
        console.log(changes);
    }

    ngDoCheck(){
        console.log('ngDoCheck called!');
    }

    ngAfterContentInit(){
        console.log('ngAfterContentInit called!');
        console.log('paragraphContent: ' + this.pargraph.nativeElement.textContent);
    }

    ngAfterContentChecked(){
        console.log('ngAfterContentChecked called!');
    }

    ngAfterViewInit(){
        console.log('textContent: ' + this.header.nativeElement.textContent);
    }

}
