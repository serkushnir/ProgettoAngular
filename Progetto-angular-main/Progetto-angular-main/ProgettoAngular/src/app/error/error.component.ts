import { Component } from '@angular/core';
import { AuthService } from '../common/auth.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
constructor(public auth: AuthService) { }

}
