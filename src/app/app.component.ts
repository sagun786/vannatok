import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService) { }
  title = 'vannatok';

  ngOnInit() {
    this.auth.localAuthSetup();
  }
}


// Re-set up authentication when the application is reloaded
//In single page application(SPA) reloads, anything stored in app memory is cleared
//authentication information is stored in SPA, you would normally lose your authentication data
//call the localAuthSetup() function from the AuthService so that the data can be restored if necessary

