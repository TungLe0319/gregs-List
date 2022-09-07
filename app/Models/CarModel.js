import { generateId } from "../Utils/generateId.js"

export class Car{
  constructor(make,model,year,price,description,imgUrl){
    this.id = generateId()
    this.make = make
    this.model = model
    this.year = year
    this.price = price
    this.description = description
    this.imgUrl = imgUrl

  }



get CarTemplate(){
  return `
  <div class="bg-info p-2 rounded my-2">
    <div class="d-flex justify-content-center py-1"><img src="${this.imgUrl}" alt="" class="rounded elevation-3" style="width: 15rem;"></div>
  <div class="stats bg-dark elevation-2 rounded flex-column p-2">
<div class="d-flex col">Make:<p class="text-danger ms-3">${this.make}</p></div>
  <div>Model:<p class="text-danger ms-3">${this.model}</p></div>
  <div>Year:<p class="text-danger ms-3">${this.year}</p></div>
  <div>Price:<p class="text-danger ms-3">${this.price}</p></div>
  <div>Description:<p class="text-warning ms-3">${this.description}</p></div>
 <button class="btn btn-danger" onclick="app.CarController.buyItem('${this.id}')">buy</button>
  </div>

  </div>`
}





}

