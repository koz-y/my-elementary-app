import { Component, OnInit } from '@angular/core';
import {
  faUmbrella,
  faMapSigns,
  faUserSecret,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGoogle,
  faTwitter,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  data: Date = new Date();
  faUmbrella = faUmbrella;
  faMapSigns = faMapSigns;
  faUserSecret = faUserSecret;
  faHeart = faHeart;
  faFacebook = faFacebook;
  faFacebookF = faFacebookF;
  faGoogle = faGoogle;
  faTwitter = faTwitter;

  constructor() {}

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('full-screen');
    body.classList.add('register-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('full-screen');
    body.classList.remove('register-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}
