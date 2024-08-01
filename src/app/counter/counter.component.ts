import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
 
  counter: number = 0;

  increaseCounter() {
    this.counter++;

    //this.counter =+ 1;
    //console.log('Counter increased:', this.counter); // For debugging
}
}
