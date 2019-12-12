import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private title: Title) { }

  loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject(false)
  setTitle(title) {
    this.title.setTitle(title)
  }

  startLoading() {
    this.loadingSubject.next(true);
  }

  stopLoading() {
    this.loadingSubject.next(false);
  }
}
