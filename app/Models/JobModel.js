export class Job {
  constructor(imgUrl, title, pay, description) {
    this.imgUrl = imgUrl;
    this.title = title;
    this.pay = pay;
    this.description = description;
  }

  get JobTemplate() {
    return `
    <div class="bg-warning p-2 rounded my-2">
      <div class="d-flex justify-content-center py-1"><img src="${this.imgUrl}" alt="" class="rounded elevation-3" style="width: 15rem;"></div>
    <div class="stats bg-dark elevation-2 rounded flex-column p-2">
  <div class="d-flex col">Title:<p class="text-danger ms-3">${this.title}</p></div>
    <div>Pay:<p class="text-danger ms-3">${this.pay}</p></div>
    <div>Job Description:<p class="text-light ms-3">${this.description}</p></div>
    
   
   <button class="btn btn-danger" onclick="app.CarController.buyItem()">buy</button>
    </div>
  
    </div>`;
  }
}
