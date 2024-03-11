import { Component, OnInit } from '@angular/core';

@Component({
  // selector: [app-servers],
  // selector: '.app-servers',
  selector: 'app-servers', 
  //best to use for components
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css' 
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "Testserver";
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer =  true;
    },2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Sever was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
