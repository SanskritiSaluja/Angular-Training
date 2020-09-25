import { Component } from '@angular/core';
import { TwoWayBindingPracticeComponent } from './two-way-binding-practice/two-way-binding-practice.component';
import { ReusableComponentPracticeComponent } from './reusable-component-practice/reusable-component-practice.component';
import { DirectivesPracticeComponent } from './directives-practice/directives-practice.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Practice-Session';
  post = {
    favourite: true,
  };

  onFavouriteChanged() {
    console.log('Favourite changed');
  }
}
