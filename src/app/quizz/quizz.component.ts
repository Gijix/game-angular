import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  @Input() position: any

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
  
  constructor() {
  }

  ngOnInit(): void {
  }
  clickMessage :string = ""
  question: string = "Combien y a-t-il de planète ?"
  answer1: number = 9
  answer2: number = 8
  answer3: number = 10
  answer4: number = 12
}


