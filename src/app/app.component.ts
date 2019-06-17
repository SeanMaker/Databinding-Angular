import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Databinding';

  serverElements = [{ type: 'server', name: 'Testserver', content: 'It is a test!'}];



}
