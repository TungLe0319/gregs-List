import { appState } from '../AppState.js';
import { Car } from '../Models/Car.js';
import { saveState } from "../Utils/Store.js";
// NOTE job of the service, take form data and convert it into a real true car/data
export class CarService {
  addCar(formData) {
    let car = new Car(formData);
    // NOTE how to add it into the array of cars
    appState.cars = [car, ...appState.cars];
    // saves to local storage
    saveState('cars',appState.cars)
  }
}

// NOTE LOWER CASE ON carService is IMPORTANT FOR HAVING AN "INSTANCE" of the service
//REVIEW SINGLETON PATTERN ever need one instance of a service floating around.
export const carService = new CarService();
