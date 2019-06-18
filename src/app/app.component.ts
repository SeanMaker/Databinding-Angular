import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Databinding';

  serverElements = [{ type: 'server', name: 'Testserver', content: 'Just a Test! It would create a server.'}];



}
