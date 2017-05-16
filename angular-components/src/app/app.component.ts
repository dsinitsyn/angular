import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    serverElements = [{type: 'server', name: 'Test', content: 'Test content'}];

    onServerAdded(serverData: {serverName: string, serverContent: string}){
        this.serverElements.push({
            type: 'server',
            name: serverData.serverName,
            content: serverData.serverContent
        });
    }

    onBlueprintAdded(bluerintData: {serverName: string, serverContent: string}){
        this.serverElements.push({
            type: 'blueprint',
            name: bluerintData.serverName,
            content: bluerintData.serverContent
        });
    }
}
