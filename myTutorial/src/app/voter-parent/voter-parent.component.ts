import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {VoterChildComponent} from "../voter-child/voter-child.component";

@Component({
  selector: 'app-voter-parent',
  templateUrl: './voter-parent.component.html',
  styleUrls: ['./voter-parent.component.css']
})
export class VoterParentComponent implements OnInit, AfterViewInit {

  @ViewChild (VoterChildComponent)
  private timerComponent:  VoterChildComponent;
  agreed = 0;
  disagreed = 0;
  voters = ['Mr IQ', 'Ms Universe', 'Bombasto'];

  constructor() { }

  ngOnInit() {
  }

  seconds() {
    return 0;
  }
  ngAfterViewInit() {
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

}
