import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.css'
})
export class AssignmentComponent {
  username = '';
  showSecret = false;
  log = [];

  onToogleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1); 
    this.log.push(new Date);
  }
}
