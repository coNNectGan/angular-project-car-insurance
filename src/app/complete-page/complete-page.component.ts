import {Component, OnInit} from '@angular/core';
// @ts-ignore
import Typewriter from 'typewriter-effect/dist/core';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-complete-page',
  templateUrl: './complete-page.component.html',
  styleUrls: ['./complete-page.component.scss']
})
export class CompletePageComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
      this.start();
  }

  start() {

    const app = document.querySelector('#writter');
    const typewriter = new Typewriter(app, {
      loop: true,
      delay: 75,
    });
    typewriter
      .pauseFor(0)
      .typeString('Thank you for submited the form. Wish you have a nice day. =D')
      .start()
      .pauseFor(10000000);
    console.log(typewriter);
  }

}
