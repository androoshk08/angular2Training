import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-voter-child',
  templateUrl: './voter-child.component.html',
  styleUrls: ['./voter-child.component.css']
})
export class VoterChildComponent implements OnInit, OnDestroy {
  intervalId= 0;
  message = '';
  seconds = 11;

  @Input() name: string;
  @Output() onVoted = new EventEmitter<boolean>();
  voted = false;

  testValue = '';
  @Input()
  get test() {
    return this.testValue;
  }
  set test(val) {
    this.testValue = val;
    this.testChange.emit(this.testValue);
  }

  @Output() testChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.start();
  }

  vote(agreed: boolean) {
    this.onVoted.emit(agreed);
    this.voted =true;
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }

  start() {
    this.countDown();
  }

  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() =>{
      this.seconds -=1;
      if (this.seconds === 0) {
        this.message = 'Blast off!'
      }
      else {
        if (this.seconds < 0) {
          this.seconds = 10; //reset
        }
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }

  ngOnDestroy() {
    this.clearTimer();
  }
}
