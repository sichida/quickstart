import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>My First {{projectName}}</h1>
    <input type="text" [(ngModel)]="projectName" />
    <input type="text" [ngModel]="projectName" (ngModelChange)="projectName=$event" />
    <button *ngIf="projectName" (click)="alertMe('my project name is: ' + projectName)">Alert me</button>
    <button template="ngIf:projectName" (click)="alertMe('my project name is: ' + projectName)">Alert me</button>
    <template [ngIf]="projectName">
        <button (click)="alertMe('my project name is: ' + projectName)">Alert me</button>
    </template>
    `
})
export class AppComponent {
    private projectName : string = "NightClazz Exo 1";
    
    public alertMe(message: string): void {
        alert(message);
    }
 }
