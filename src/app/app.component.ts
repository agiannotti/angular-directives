import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/fontawesome-free/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  courses = [];
  faCoffee = faCoffee;
  faAddressCard = faAddressCard;
  viewMode = 'map';
}
