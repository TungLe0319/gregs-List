import { Car } from './Models/CarModel.js';
import { House } from './Models/HouseModel.js';
import { Value } from './Models/Value.js';
import { EventEmitter } from './Utils/EventEmitter.js';
import { isValidProp } from './Utils/isValidProp.js';
import { loadState } from './Utils/Store.js';

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', Value);

  /** @type {import('./Models/CarModel').Car[]} */
  cars = [
    new Car(
      'Ford',
      'Mustang',
      1978,
      18000,
      'It hass got 4 wheels.',
      'https://img.hmn.com/900x0/stories/2018/06/coupe.jpg'
    ),
    new Car(
      'Hyundai',
      'Sante Fe',
      2014,
      8000,
      'great for road trips and breaking down.',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fperformancedrive.com.au%2Fwp-content%2Fuploads%2F2016%2F09%2FHyundai-Santa-Fe-30-Special-Edition.jpg&f=1&nofb=1'
    ),
    new Car(
      'Ford',
      'Fusion Sport',
      2017,
      40000,
      'good performance, comfortable interior',
      'https://www.gannett-cdn.com/-mm-/d79d626f7be1d8a0681c896ce5f79d37003c3064/c=0-331-4466-2854/local/-/media/2017/01/30/Salinas/Salinas/636213994394143446-2017-Ford-Fusion-Sport.jpg?width=3200&height=1680&fit=crop'
    ),
    new Car(
      'Tesla',
      'Model S',
      2020,
      80000,
      'It has got 4 wheels.',
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fzombdrive.com%2Fimages1600_%2F2014-tesla-model-s-2686.jpg&f=1&nofb=1'
    ),
  ];

  /** @type {import('./Models/HouseModel').House[]} */
  Houses = [
    new House(
      'Idaho',
      250000,
      'Cabin in the Words',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.glampinghub.com%2FCACHE%2Fimages%2Faccommodations%2Fwoodsy-rustic-cabin-with-forest-views-near-yellowstone-1538758722222%2F58d7efe8d3e728d9baa8572222112e7e.jpeg&f=1&nofb=1'
    ),
    new House(
      'NewYork',
      600000,
      'Cabin in the Words',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F13%2Fd2%2F96%2F13d2968b7f35e6a9e0d5378609c3f29c.jpg&f=1&nofb=1'
    ),
    new House(
      'Oceanside, Oregon',
      450000,
      'Cabin in the Words',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F1d%2Ff5%2F79%2F1df579f5f0bd8482541d70a2f71750e5.jpg&f=1&nofb=1'
    ),
  ];
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
