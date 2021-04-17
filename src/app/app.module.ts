import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PersonalDetailsComponent} from './personal-details/personal-details.component';
import {CarDetailsComponent} from './car-details/car-details.component';
import {CompletePageComponent} from './complete-page/complete-page.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {NgbDatepickerModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxSpinnerModule} from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    CarDetailsComponent,
    CompletePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: PersonalDetailsComponent,
        data: {
          title: 'personal details page'
        }
      },
      {
        path: 'carDetails',
        component: CarDetailsComponent,
        data: {
          title: 'car details page'

        }
      },
      {
        path: 'completePage',
        component: CompletePageComponent,
        data: {
          title: 'complete page'
        }
      }
    ]),
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      enableHtml: true
    }),
    NgbDatepickerModule,
    NgbDropdownModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
