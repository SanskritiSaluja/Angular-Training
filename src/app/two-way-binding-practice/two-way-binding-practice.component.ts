import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'two-way-binding-practice',
  templateUrl: './two-way-binding-practice.component.html',
  styleUrls: ['./two-way-binding-practice.component.css'],
})
export class TwoWayBindingPracticeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'Email';
  email = 'sanskriti@gmail.com';

  Onclicked() {
    console.log(this.email);
  }
}
