import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent implements OnInit {
  @Input() min: number;
  @Input() max: number;
  @Input() disabled: boolean;

  counter: number;

  constructor() {
    this.min = 0;
    this.max = 1000;
    this.disabled = false;
    this.counter = 0;
  }

  ngOnInit() {
    this.counter = this.min;
  }
}
