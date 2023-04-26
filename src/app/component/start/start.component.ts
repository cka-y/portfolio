import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  animationEnded(animationEvent: AnimationEvent): void {
    console.log('animation has ended');
    console.log(animationEvent);
  }
}
