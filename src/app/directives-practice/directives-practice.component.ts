import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives-practice',
  templateUrl: './directives-practice.component.html',
  styleUrls: ['./directives-practice.component.css'],
})
export class DirectivesPracticeComponent {
  constructor() {}

  courses = [1, 2, 3, 4];

  viewMode = 'map';

  canSave = false;
}
