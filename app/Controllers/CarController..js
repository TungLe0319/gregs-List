import { appState } from "../AppState.js";
import { carService} from "../Services/CarService.js"

function _drawCars(){
  let cars = appState.cars
  let template = ''
cars.forEach(c=> template += c.CarTemplate)
document.getElementById('cars').innerHTML = template

}

export class CarController{
constructor(){

_drawCars()
}


}