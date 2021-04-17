import {Component, OnInit} from '@angular/core';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {

  years: string[] = ['0', '1', '2', '3', '4', '5++'];
  carMake: string[] = ['BMW', 'TOYOTA', 'HONDA'];
  bmw: string[] = ['X1', 'X2', 'X3'];
  toyota: string[] = ['Camry', 'Vios', 'Yaris'];
  honda: string[] = ['Accord', 'Civic', 'CR-V'];
  carMakeSelected: any;
  carModels: string[] = [];


  constructor(private route: ActivatedRoute,
              private router: Router,
              public toastr: ToastrService,
              private calendar: NgbCalendar,
  ) {
  }

  model: NgbDateStruct | undefined;
  today = this.calendar.getToday();
  placement = 'right';

  ngOnInit(): void {
  }

  nextPage() {

    setTimeout(() => {
      this.router.navigate(['/completePage']);
    }, 1000);
  }

  previousPage() {
    this.router.navigate(['']);
  }


  getModelList() {
    this.carModels.splice(0, this.carModels.length);
    if (this.carMakeSelected === 'BMW') {
      for (let a = 0; this.bmw.length > a; a++) {
        this.carModels.push(this.bmw[a]);
      }
    } else if (this.carMakeSelected === 'TOYOTA') {

      for (let a = 0; this.toyota.length > a; a++) {
        this.carModels.push(this.toyota[a]);
      }
    } else if (this.carMakeSelected === 'HONDA') {
      for (let a = 0; this.honda.length > a; a++) {
        this.carModels.push(this.honda[a]);
      }
    }
  }

}
