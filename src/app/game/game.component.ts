import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import poulet from './game.json';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  constructor() {}
  ngOnInit() {
  }
  str: string = 'test';
  sentence: string = 'Vous pouvez lancer les dés';
  randomNums: any[] = poulet;
  value: number = 0;
  finalPosition: number = 0;
  position: number = 0;
  reset(): any {
    console.log('test');
    this.position = 0;
    this.sentence = 'Vous pouvez lancer les dés';
  }
  randomNumber(event: any) {
      const previous = this.position;
      this.sentence = 'Votre pion est en cours de mouvement';
      const addValue = () => {
        if (this.position === poulet.length) {
          clearInterval(move);
          this.sentence = 'Vous êtes arrivé à la fin !';
          return;
        }
        this.position += 1;
        if (previous + this.value === this.position) {
          clearInterval(move);
          this.finalPosition = this.position;
          this.sentence = 'Vous pouvez lancer les dés';
        }
      };
      this.value = Math.floor(Math.random() * 5) + 1;
      let move: ReturnType<typeof setTimeout> = setInterval(addValue, 200);
      if (this.position > poulet.length) {
        this.position = poulet.length;
      }
  }
}
