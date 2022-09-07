import { appState } from "../AppState.js";
import { Car } from "../Models/CarModel.js";

export class CarService{

buyItem(id){
  let car = appState.cars.find(p => p.id== id)
  console.log(car.id);
}



}
export const carService = new CarService()