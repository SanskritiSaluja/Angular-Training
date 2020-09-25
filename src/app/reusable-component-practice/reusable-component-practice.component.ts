import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'reusable-component-practice',
  templateUrl: './reusable-component-practice.component.html',
  styleUrls: ['./reusable-component-practice.component.css'],
})
export class ReusableComponentPracticeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input('is-Favourite') isFavourite: boolean;
  @Output('change') change = new EventEmitter();

  onClicked() {
    this.isFavourite = !this.isFavourite;
    this.change.emit();
  }
}
