import { Component } from "@angular/core";

@Component({
    template: `

<h3>El Contador es: {{ counter }}</h3>
<hr>
<button (click)="increaseBy()">+1</button>
<button (click)="reset()">Reset</button>   
<button (click)="decreaseBy()">-1</button>
    `,
    selector: 'app-counter'
})
export class CounterComponent {

    title:string = 'The Counter';

    counter: number = 0;

    increaseBy(){
        this.counter += 1;
    }

    decreaseBy(){
        this.counter -= 1;
    }

    reset(){
        this.counter = 10;
    }
}