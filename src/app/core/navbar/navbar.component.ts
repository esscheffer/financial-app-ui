import {Component} from '@angular/core';
import {AuthService} from "../../security/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showMenu = false;

  constructor(private auth: AuthService) {
  }
}
