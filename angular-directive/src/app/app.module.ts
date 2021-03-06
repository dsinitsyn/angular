import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { BasicHighlightDirective } from "../basc-highlight/basic-highlight.directive";
import { BetterHighlightDirective } from '../better-highlight/better-highlight.directive';
import { UnlessDirective } from '../unless/unless.directive';
import { NumberInputComponent } from './number-input/number-input.component'

@NgModule({
    declarations: [
        AppComponent,
        BasicHighlightDirective,
        BetterHighlightDirective,
        UnlessDirective,
        NumberInputComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
