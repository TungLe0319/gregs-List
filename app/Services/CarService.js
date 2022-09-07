import { appState } from "../AppState.js";
import { Car } from "../Models/CarModel.js";

class CarService{

buyItem(name){
  let car = appState.cars.find(p => p.name == name)
  console.log(car);
}



}
export const carService = new CarService()