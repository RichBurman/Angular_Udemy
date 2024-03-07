import { Component, OnInit } from '@angular/core';

@Component({
  // selector: [app-servers],
  // selector: '.app-servers',
  selector: 'app-servers', //best to use for components
  template: '<app-server></app-server><app-server></app-server>',
  styleUrl: './servers.component.css'
})
export class ServersComponent {

}
