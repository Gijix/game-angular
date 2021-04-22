import { Component, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    for (let i = 0; i < this.maxSize + 1; i++) {
      this.randomNums.push(i);
    }
  }
  sentence : string = "Vous pouvez lancer les dés"
  maxSize: number = 20;
  value: number = 0;
  position: number = 0;
  reset(): any {
    this.position = 0;
  }
  onShow(event: any) {
    alert(event.target.innerHTML); // returns Show
  }
  onKey(event: any) {
    this.maxSize = event.target.value;
  }
  randomNumber(event: any) {
    (event.target as HTMLButtonElement).disabled = true;
    const previous = this.position;
    this.sentence = "Votre pion est cours de mouvement"
    const addValue = () => {
      if (this.position === this.maxSize) {
        clearInterval(move);
        (event.target as HTMLButtonElement).disabled = false;
        this.sentence = "Vous pouvez lancer les dés"
        return;
      }

      this.position += 1;
      if (previous + this.value === this.position) {
        clearInterval(move);
        (event.target as HTMLButtonElement).disabled = false;
      }
    };
    this.value = Math.floor(Math.random() * 5) + 1;
    let move: ReturnType<typeof setTimeout> = setInterval(addValue, 200);
    if (this.position > this.maxSize) {
      this.position = this.maxSize;
      
    }
  }
  randomNums: number[] = [];
}
