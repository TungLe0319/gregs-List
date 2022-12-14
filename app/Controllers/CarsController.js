import { appState } from '../AppState.js';
import { carService } from '../Services/CarsService.js';
import { getFormData } from '../Utils/FormHandler.js';
import { setHTML } from '../Utils/Writer.js';

function _drawCars() {
  let template = '';
  // NOTE don't need to set up a variable like cars=appState.cars , can omit and just skip to it using itelli-sense
  appState.cars.forEach((car) => (template += car.CarTemplate));
  // HELP function takes in the id from HTML and then need to do more research as to why template
  setHTML('listings', template)
}

export class CarsController {
  constructor() {
    // Observer pattern read into it more.
    _drawCars();
    // some event  run some function
    // name of the property in AppState will be the name of the event
    // NOTE sets up a listener to be triggered each time a change occurs to the cars array causing the page to re-render each of the cars
    // NOTE helps keep data change in sync with user experience.
    appState.on('cars', _drawCars);
  }

  // NOTE first thing with dealing with user is try Catch
  addCar() {
    try {
      //REVIEW  SOMETHING WE DO WITH EVERY FORM!!!!!
      //@ts-ignore
      window.event.preventDefault();
      const form = window.event.target;
      let formData = getFormData(form);

      // can't do job without formData
      carService.addCar(formData);
      form.reset();
    } catch (error) {
      console.error('addCar', error);
    }
  }
}

// NOTE never manipulate data directly from a controller its a big NO-NO
