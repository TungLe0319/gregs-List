import { generateId } from "../Utils/generateId.js"

export class Car{

  // when I want a new car, function that is sued to MAKE it.

 /**
  * 
  * @param {string} make 
  * @param {string} model 
  * @param {number} year 
  * @param {number} price 
  * @param {string} description 
  * @param {string} imgUrl 
  */
  constructor(make,model,year,price,description,imgUrl){
    this.id = generateId()
    this.make = make
    this.model = model
    this.year = year
    this.price = price
    this.description = description
    this.imgUrl = imgUrl

  }


  /**
   * <div class="card">
              <img src="https://img.hmn.com/900x0/stories/2018/06/coupe.jpg" alt="" class="img-fluid rounded">
              <div class="card-body">
                <h5 class="text-uppercase">Honda|Accord 1985</h5>
                <p><strong>$1000</strong></p>
                <p>Zoom Zoom</p>
              </div>
            </div>
   */

get CarTemplate(){
  return /*html*/ `
  <div class="col-md-4 col-lg-3">
   <div class="card">
  <img src="${this.imgUrl}" alt="${this.make}-${this.model}" class="img-fluid rounded">
  <div class="card-body">
    <h6 class="text-uppercase">${this.make}|${this.model}${this.year}</h6>
    <p><strong>$${this.price}</strong></p>
    <small>${this.description}</small>
  </div>
</div>
</div>`
}





}

