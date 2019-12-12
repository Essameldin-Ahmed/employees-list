import { Component } from '@angular/core';
import { MainService } from './core/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'climedo-demo';

  isLoading$
  constructor(private mainService: MainService) {
  }

  ngOnInit() {
    this.isLoading$ = this.mainService.loadingSubject;
  }
}
