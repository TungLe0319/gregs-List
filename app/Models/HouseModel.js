export class House{
  constructor(area,price,description,imgUrl){
    this.area = area
    this.price = price
    this.description = description
    this.imgUrl = imgUrl
  }


  get HouseTemplate(){

    return `
    <div class="bg-warning p-2 rounded my-2">
      <div class="d-flex justify-content-center py-1"><img src="${this.imgUrl}" alt="" class="rounded elevation-3" style="width: 15rem;"></div>
    <div class="stats bg-dark elevation-2 rounded flex-column p-2">
  <div class="d-flex col">Make:<p class="text-danger ms-3">${this.area}</p></div>
    <div>Model:<p class="text-danger ms-3">${this.price}</p></div>
    <div>Year:<p class="text-light ms-3">${this.description}</p></div>
    
   
   <button class="btn btn-danger" onclick="">buy</button>
    </div>
  
    </div>`
  }
}