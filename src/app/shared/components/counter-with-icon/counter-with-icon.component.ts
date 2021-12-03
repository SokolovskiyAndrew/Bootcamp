import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter-with-icon',
  templateUrl: './counter-with-icon.component.html',
  styleUrls: ['./counter-with-icon.component.scss']
})
export class CounterWithIconComponent implements OnInit {
  @Input() counter: number = 0;
  @Output() buttonClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(): void {
    this.buttonClicked.emit()
  }
}
