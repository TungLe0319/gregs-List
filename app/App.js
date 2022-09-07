import { CarController } from './Controllers/CarController..js';

import { HouseController } from './Controllers/HouseController.js';
import { JobController } from './Controllers/JobController.js';
class App {
  CarController = new CarController();
  HouseController = new HouseController();
  JobController = new JobController();
}

window['app'] = new App();
