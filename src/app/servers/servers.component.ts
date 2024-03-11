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

  constructor() {
    setTimeout(() => {
      this.allowNewServer =  true;
    },2000);
  }

  onCreateServer() {
    this.serverCreationStatus = "Sever was created"
  }
}
