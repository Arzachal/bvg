import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBvtkZfyJEUAxLqcXZ-6K5n-3b9G1Avxa8',
      authDomain: 'arzachal-buy-these.firebaseapp.com'
    });
  }
}
