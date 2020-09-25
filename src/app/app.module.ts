import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectivesPracticeComponent } from './directives-practice/directives-practice.component';
import { TwoWayBindingPracticeComponent } from './two-way-binding-practice/two-way-binding-practice.component';
import { FormsModule } from '@angular/forms';
import { ReusableComponentPracticeComponent } from './reusable-component-practice/reusable-component-practice.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesPracticeComponent,
    TwoWayBindingPracticeComponent,
    ReusableComponentPracticeComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
