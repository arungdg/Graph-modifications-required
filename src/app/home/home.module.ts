import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { MatCardModule, MatFormFieldModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ChartComponent } from '../chart/app.chart';

@NgModule({
  declarations: [
    HomeComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule, MatInputModule
  ],
  providers: [
MatDatepickerModule,
MatFormFieldModule
  ],
  exports: [
    HomeComponent
  ]
})

export class HomeModule {
}

