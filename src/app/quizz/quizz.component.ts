import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import poulet from '../game/game.json'

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  @Input() position: any
  @Input() question: any


  constructor() {
  }
  spaceQuizz: Array<any>=poulet

  ngOnInit(): void {
    // for(let i=0; i<this.spaceQuizz.length; i++) {
    //   this.quizz.push({i})
    // }
    console.log(this.question,"hello")
  }

verifyanswer(event:any){
  if ((event.target as HTMLButtonElement).value===this.spaceQuizz[this.position].goodAns){
    console.log("goodAnswer")
  }else{
    console.log("try again!")
  }
}
}