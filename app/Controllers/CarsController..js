import { appState } from "../AppState.js";
import { carService} from "../Services/CarService.js"
import { setHTML } from "../Utils/Writer.js";

function _drawCars(){
  let cars = appState.cars
  let template = ''
appState.cars.forEach(car => template += car.CarTemplate)
// HELP function takes in the id from HTML and then need to do more research as to why template
setHTML('listings', template)

}

export class CarsController{
constructor(){

_drawCars()//NOTE draw cars on page load
}



buyItem(id){
  carService.buyItem(id)
  console.log("hi from controller");
}



}