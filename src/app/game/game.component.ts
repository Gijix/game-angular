import { Component, OnInit, SimpleChange } from '@angular/core';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    for (let i = 0; i < this.maxSize+1; i++) {
      this.randomNums.push(i)
    }
  }
  maxSize :number = 30
  value : number = 0
  position : number = 0
  reset():any{
    this.position = 0
  }
  randomNumber():any {
    const previous = this.position
    const addValue  = () =>{
      if(this.position === this.maxSize){
        clearInterval(move)
        return
      }

      this.position += 1
      if(previous+ this.value === this.position){
        clearInterval(move)
      }
    }
    this.value = Math.floor(Math.random() * 5)+1;
    let move : ReturnType<typeof setTimeout> = setInterval(addValue,200)
    if(this.position > this.maxSize){
      this.position = this.maxSize
    }
  }
  randomNums : number[] = []

}
