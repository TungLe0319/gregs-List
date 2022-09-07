export class Job {
  constructor(imgUrl, title, pay, description) {
    this.imgUrl = imgUrl;
    this.title = title;
    this.pay = pay;
    this.description = description;
  }

  get JobTemplate() {
    return `
    <div class="card" style="width: 18rem;">
              <img src="${this.imgUrl}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <h5 class="card-title">${this.pay}</h5>
                <p class="card-text">${this.description}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>`;
  }
}
