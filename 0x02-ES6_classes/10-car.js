class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const OtherCar = this.constructor[Symbol.species];
    return new OtherCar();
  }
}

export default Car;
