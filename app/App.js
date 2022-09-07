import { CarsController } from './Controllers/CarsController..js';

import { HouseController } from './Controllers/HouseController.js';
import { JobController } from './Controllers/JobController.js';
class App {
  // lowercase because it's the INSTANCE
  carsController = new CarsController();
  HouseController = new HouseController();
  JobController = new JobController();
}

window['app'] = new App();
