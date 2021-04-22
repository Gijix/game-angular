import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import poulet from './game.json'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnChanges,OnInit {
  constructor() {}
  ngOnInit(){
    for(let i = 0; i < this.maxSize;i++){
      this.randomNums.push(i)
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes.playable){
    }
  }
  str : string = "test"
  sentence : string = "Vous pouvez lancer les dés"
  randomNums : number[] = [];
  maxSize: number = 20;
  value: number = 0;
  finalPosition : number = 0
  position: number = 0;
  playable : boolean = true
  reset(): any {
    console.log('test')
    this.playable = true
    this.position = 0;
    this.sentence = "Vous pouvez lancer les dés"
  }
  randomNumber(event: any) {
    if (this.playable=== false){
      console.log(this.playable, 'poulet') 
    }else{
    this.playable = false
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
        this.finalPosition = this.position
        this.sentence = "Vous pouvez lancer les dés"
      }
    };
    this.value = Math.floor(Math.random() * 5) + 1;
    let move: ReturnType<typeof setTimeout> = setInterval(addValue, 200);
    if (this.position > this.maxSize) {
      this.position = this.maxSize;
    }
  }
  }
  verifyanswer(event : any,arg : any): void{
    console.log(arg, parseInt((event.target as HTMLButtonElement).value))
    if(parseInt((event.target as HTMLButtonElement).value) === arg){
      this.playable = true
      console.log(this.playable)
  } else{
    this.position -2
    this.playable = false
    console.log('poulet2',this.playable)
  }
}
}
