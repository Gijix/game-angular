import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import poulet from './game.json'

// import {Status} from '../quizz.component.'


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnChanges,OnInit {
  constructor() {}
  str : string = "test"
  sentence : string = "Vous pouvez lancer les dés"
  randomNums : number[] = [];
  spaceChicken: Array<any>=poulet
  intergalactikchick: object[]=[]
  maxSize: number = 21;
  value: number = 0;
  finalPosition : number = 0
  position: number = 0;
  playable : boolean = true
  vital:boolean =true


  
  ngOnInit(){
      for(let i =0; i<this.spaceChicken.length;i++){
        this.intergalactikchick.push({i})
      }   
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes.playable){
    }
  }
  reset(): any {  
    this.position = 0;
    this.sentence = "Vous pouvez lancer les dés"
  }
  randomNumber(event: any) {
    const previous = this.position;
    this.sentence = "Votre pion est en cours de mouvement"
    
    const addValue = () => {
      if (this.position === this.spaceChicken.length) {
        clearInterval(move);
        this.sentence = "Vous êtes arrivé à la fin !"
        return;
      }
      this.position += 1;
      if (previous + this.value === this.position) {
        clearInterval(move);
        this.finalPosition = this.position
        this.sentence = "Vous pouvez lancer les dés";
      }
    };
    this.value = Math.floor(Math.random() * 5) + 1;
    let move: ReturnType<typeof setTimeout> = setInterval(addValue, 200);
    if (this.position > this.spaceChicken.length) {
      this.position = this.spaceChicken.length;
    }
  }
 
}

/*  verifyanswer(event : any,arg : any): void{
    if(parseInt((event.target as HTMLButtonElement).value) === arg){
  } else{
  this.position -2
   }
}*/

