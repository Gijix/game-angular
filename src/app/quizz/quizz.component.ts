import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css'],
})
export class QuizzComponent implements OnInit {
  @Input() question: any;
  @Input() position : any;
  constructor() {}
  ngOnInit(): void {
  }
}
