import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

  model: NgbDateStruct | undefined;
  today = this.calendar.getToday();
  placement = 'right';

  constructor(private route: ActivatedRoute,
              private router: Router,
              public toastr: ToastrService,
              private calendar: NgbCalendar,
              private spinner: NgxSpinnerService,
  ) {
  }


  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  nextPage() {
    this.toastr.success('Success', 'Info');
    setTimeout(() => {
      this.router.navigate(['/carDetails']);
    }, 500);

  }
}
