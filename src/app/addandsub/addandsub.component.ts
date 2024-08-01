import { Component } from '@angular/core';

@Component({
  selector: 'app-addandsub',
  standalone: true,
  imports: [],
  templateUrl: './addandsub.component.html',
  styleUrl: './addandsub.component.css'
})
export class AddandsubComponent {
  counter: number = 0;

  increaseCounter() {
    this.counter += 1;
  }

  decreaseCounter() {
    this.counter -= 1;

}
}
