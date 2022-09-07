import { Car } from './Models/Car.js';
import { House } from './Models/House.js';
import { Job } from './Models/Job.js';
import { Value } from './Models/Value.js';
import { EventEmitter } from './Utils/EventEmitter.js';
import { isValidProp } from './Utils/isValidProp.js';
import { loadState } from './Utils/Store.js';

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', Value);

  /** @type {import('./Models/Car').Car[]} */
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
    new Car(
      'BackToTheFuture',
      'Model 1',
      2020,
      800000,
      ' I have seen your future.',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fcarbayblog%2Fwp-content%2Fuploads%2F2016%2F01%2F29110257%2F1441680331_blist5708.jpg&f=1&nofb=1'
    ),
    new Car(
      'Cadallac',
      'DeVille',
      1970,
      180000,
      ' You got some street cred going for ya.',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kloompy.com%2Foc-content%2Fuploads%2F77%2F87670.jpg&f=1&nofb=1'
    ),
    new Car(
      'The',
      'Bat',
      2010,
      1805000,
      ' I Am The Bat Man Mobile.',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.corvetteforum.com%2Fwp-content%2Fuploads%2F2020%2F12%2F0-1581008632087%402x-1-e1606944996924.jpg&f=1&nofb=1'
    ),
    new Car(
      'Mercedes',
      'Benz',
      2010,
      1805000,
      ' Great for camping and living by yourself.',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.carbuzz.com%2Fgallery-images%2F2020-mercedes-benz-sprinter-crew-van-front-angle-view-carbuzz-708744-1600.jpg&f=1&nofb=1'
    ),
  ];

  /** @type {import('./Models/House').House[]} */
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
      'Knotty Cabin right next to the OceanSide Oregon Beach, Absolutley stunning view and small walk to the beachfront.',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F1d%2Ff5%2F79%2F1df579f5f0bd8482541d70a2f71750e5.jpg&f=1&nofb=1'
    ),
    new House(
      'FallRiver, MA',
      90000,
      'Lizzie Borden House',
      'https://media.timeout.com/images/105635087/1372/1029/image.jpg'
    ),
    new House(
      'Montreux, Switzerland',
      280000,
      'Charming Mansion for the wealthy and lucky to be able to be in Switzerland',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhomesoftherich.net%2Fwp-content%2Fuploads%2F2017%2F01%2FScreen-Shot-2017-01-09-at-2.43.40-PM.png&f=1&nofb=1'
    ),
    new House(
      'Anywhere, United States',
      75000,
      'a beautiful mobile home in wheels you can have placed where ever you want.',
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.doityourselfrv.com%2Fwp-content%2Fuploads%2F2015%2F02%2F30-foot-long-tiny-house.jpg&f=1&nofb=1'
    ),
    new House(
      'McAllen, Texas',
      90000,
      'a comfortable home in texas that has a large backyard, no wild cats totally roaming outside of your house.',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdolcanhomes.com%2Fwp-content%2Fuploads%2F2020%2F11%2FDolcan-Homes_1008-E-Jersey-Meadow_Mcallen_Web_005.jpg&f=1&nofb=1'
    ),
  ];

  // -------------------------------------------

  /** @type {import('./Models/Job').Job[]} */

  jobs = [
    new Job(
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbeapythondev.files.wordpress.com%2F2020%2F01%2Fcanva-software-developer-working.jpg%3Fw%3D800&f=1&nofb=1',
      'SoftWareDeveloper',
      50000,
      "exactly what you're here for."
    ),
    new Job(
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuk.jobrapido.com%2Fblog%2Fwp-content%2Fuploads%2Fsites%2F3%2F2020%2F04%2Fpet-sitter.jpg&f=1&nofb=1',
      'Pet Sitter',
      200,
      'Watching my pets for the weekend.'
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
