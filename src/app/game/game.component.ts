import { Component, OnInit } from '@angular/core';

import  poulet from "./game.json"

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  constructor() {
    
  }
  ngOnInit(): void {
    console.log(poulet)
    for (let i = 0; i < this.maxSize + 1; i++) {
      this.randomNums.push(i);
    }
  }
  sentence : string = "Vous pouvez lancer les dés"
  maxSize: number = 22;
  
  value: number = 0;
  position: number = 0;
  reset(): any {
    this.position = 0;
    this.sentence = "Vous pouvez lancer les dés"
  }
  randomNumber(event: any) {
    (event.target as HTMLButtonElement).disabled = true;
    const previous = this.position;
    this.sentence = "Votre pion est en cours de mouvement"
    const addValue = () => {
      if (this.position === this.maxSize) {
        clearInterval(move);
        this.sentence = "Vous êtes arrivé à la fin !"
        return;
      }
      this.position += 1;
      if (previous + this.value === this.position) {
        clearInterval(move);
        (event.target as HTMLButtonElement).disabled = false;
        this.sentence = "Vous pouvez lancer les dés"
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
