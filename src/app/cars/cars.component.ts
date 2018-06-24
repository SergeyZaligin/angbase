import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  addCarStatus: boolean = false;
  carName: string = '';
  cars: Array<string> = ['Ford', 'Audi', 'Bmw', 'Mazda', 'Lada', 'Izh'];
  dates: Array<object> = [
    new Date(2015, 1, 5),
    new Date(2018, 3, 4),
    new Date(2013, 3, 1),
    new Date(2011, 2, 4),
    new Date(2010, 3, 3),
    new Date(2014, 2, 4)
  ];

  addCar () {
    this.addCarStatus = true;
    this.cars.push(this.carName);
  }

  setUppercaseText (car: string) {
    return car.length > 3 ? true : false;
  }
}
