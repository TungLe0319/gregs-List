import { CarController } from "./Controllers/CarController..js";
import { ValuesController } from "./Controllers/ValuesController.js";
import{ HouseController}from "./Controllers/HouseController.js"
class App {
CarController= new CarController()
HouseController = new HouseController()
}

window["app"] = new App();
