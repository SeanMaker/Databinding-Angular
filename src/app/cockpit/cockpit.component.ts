import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  serverCreated = new EventEmitter<{serverName: string, serverContent: string}>;
  blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>;
  newServerName = '';
  newServerContent = '';
  // serverElements = [];
  //
  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit();
  }

  onAddBlueprint() {
    this.blueprintCreated.emit();
  }

}
