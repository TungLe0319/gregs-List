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
}