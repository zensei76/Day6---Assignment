  //write a class to calculate the uber price.

  class uber{
    constructor(km){
        this.km = km;
        this.rate = 10;
    }
    price(){
        return `Your Uber price is ${ this.km*this.rate}`;
    }
  }
  
  let user = new uber(12);
  console.log(user.price());