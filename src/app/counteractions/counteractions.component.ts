import { Component } from '@angular/core';

@Component({
  selector: 'app-counteractions',
  standalone: true,
  imports: [],
  templateUrl: './counteractions.component.html',
  styleUrl: './counteractions.component.css'
})
export class CounteractionsComponent {
  step: number=0;
  counter: number = 0;
increaseCounter() {
  this.counter += 1;
}
decreaseCounter() {
  this.counter -= 1;
}

  setStep(event: Event) {
    const target = event.target as HTMLElement; // First assert as HTMLElement
    if (target instanceof HTMLInputElement) {
        this.step = Number(target.value) || 1; // Directly use target.value
    } else {
        this.step = 1; // Default value if target is not an HTMLInputElement
    }
}


}
