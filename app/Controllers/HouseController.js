import { appState } from "../AppState.js";
import { House } from "../Models/House.js";

function _drawHouses(){
  let houses = appState.Houses
  
  let template = ''
  houses.forEach(house =>{
    template += house.HouseTemplate
  })
  document.getElementById('houses').innerHTML=template
  
}

export class HouseController{
  constructor(){
_drawHouses()
  }
}