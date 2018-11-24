import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  componenetVariable = "Here are some links to help you start";

  private clickHandler(): void {
    alert("Test clcik");
  }
}
