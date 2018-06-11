import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-voter-parent',
  templateUrl: './voter-parent.component.html',
  styleUrls: ['./voter-parent.component.css']
})
export class VoterParentComponent implements OnInit {
  agreed = 0;
  disagreed = 0;
  voters = ['Mr IQ', 'Ms Universe', 'Bombasto'];

  constructor() { }

  ngOnInit() {
  }

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

}
