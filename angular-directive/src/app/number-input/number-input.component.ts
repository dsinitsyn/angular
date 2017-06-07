import { Component, OnInit, Input, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'number-input',
    templateUrl: './number-input.component.html',
    styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent implements OnInit {

    @ViewChild('input') $input: ElementRef;
    @Input('max') max: number;
    @Input('min') min: number;
    @Output() onError = new EventEmitter<string>();
    value: number = 0;

    constructor(){
    }

    ngOnInit(){
        this.value = this.min;
    }

    onKeydown(e){

        if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Allow: Ctrl+C
            (e.keyCode == 67 && e.ctrlKey === true) ||
            // Allow: Ctrl+V
            (e.keyCode == 86 && e.ctrlKey === true) ||
            // Allow: Ctrl+X
            (e.keyCode == 88 && e.ctrlKey === true) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }

        if (this.value == 0){
            this.$input.nativeElement.value = '';
        }
        let value = parseInt(this.value.toString() + e.key.toString());
        

        if (value > this.max){
            this.onError.emit('max');
            e.preventDefault()
        }

        if (value < this.min){
            this.onError.emit('min');
            e.preventDefault()
        }
        
    }
    
    onPaste(e){
        e.preventDefault()
    }

    onKeyup(){
        // console.log(this.value);
        // this.value = +this.value;
    }

    onIncrease(){
        if (this.value < this.max){
            this.value++;
        }else{
            this.onError.emit('max');
        }
    }

    onDecrease(){
        if (this.value > this.min){
            this.value--;
        }else{
            this.onError.emit('min');
        }
    }

}
