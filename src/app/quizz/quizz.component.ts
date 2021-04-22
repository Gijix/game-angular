import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import poulet from '../game/game.json'

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  @Input() position: any
  @Input() verifyanswer: any
  @Output() change= new EventEmitter();
  constructor() {
  }

  verifyanswer2(event : any,arg : any): void{
    console.log(arg, parseInt((event.target as HTMLButtonElement).value))
    if(parseInt((event.target as HTMLButtonElement).value) === arg){
      this.change.emit({play: true});
  } else{
    this.position -2
    this.change.emit({play: false});
  }
}
  ngOnInit(): void {
  }
  clickMessage :string = ""
  question: string = "Combien y a-t-il de planète ?"
  answer1: number = 9
  answer2: number = 8
  answer3: number = 10
  answer4: number = 12
  goodAnswer: number = 9
}


