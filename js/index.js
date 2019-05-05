let TeslaX = {};
TeslaX.make = 'Tesla';
TeslaX.model = 'X';
TeslaX.price = 150000;

function beep() {
    console.log( this.make + ' ' + this.model +'beep-beep');
}

TeslaX.beep = beep;

TeslaX.beep();

let seatIbiza = {
    make: 'siat',
    model: 'Ibiza',
    price: '11000',
    beep: beep
};

seatIbiza.beep();

function Car (make, model, price){
    this.make = make;
    this.model = model;
    this.price = price;
    this.beep = beep;
}

let volkswagenBeetle = new Car ('Volkswagen', 'Beetle', 20000);

volkswagenBeetle.beep();