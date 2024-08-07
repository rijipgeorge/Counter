import { Component } from '@angular/core';

@Component({
  selector: 'app-counteractions',
  standalone: true,
  imports: [],
  templateUrl: './counteractions.component.html',
  styleUrls: ['./counteractions.component.css']
})
export class CounteractionsComponent {
  counter: number = 0; // The current value of the counter
  step: number = 1; // The value to increment or decrement by

  // Method to set the step value from the input box
  setStep(event: Event) {
    // Use type assertion to ensure event.target is treated as HTMLInputElement
    const inputElement = event.target as HTMLInputElement | null;

    // Check if inputElement is not null
    if (inputElement) {
      // Convert the input value to a number and assign it to step
      this.step = Number(inputElement.value) || 1;
    } else {
      // Handle the case where inputElement is null (if necessary)
      console.warn('Input element is null');
      this.step = 1;
    }
  }

  // Method to increase the counter by the step value
  increaseCounter() {
    this.counter += this.step;
  }

  // Method to decrease the counter by the step value
  decreaseCounter() {
    this.counter -= this.step;
  }
}
