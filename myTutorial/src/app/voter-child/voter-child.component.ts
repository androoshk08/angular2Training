import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-voter-child',
  templateUrl: './voter-child.component.html',
  styleUrls: ['./voter-child.component.css']
})
export class VoterChildComponent implements OnInit {

  @Input() name: string;
  @Output() onVoted = new EventEmitter<boolean>();
  voted = false;

  constructor() { }

  ngOnInit() {
  }

  vote(agreed: boolean) {
    this.onVoted.emit(agreed);
    this.voted =true;
  }

}
