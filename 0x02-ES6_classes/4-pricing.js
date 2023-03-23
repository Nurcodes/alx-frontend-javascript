import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of class Currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(n) {
    if (typeof n !== 'number') {
      throw new TypeError('Number must be a number');
    }
    this._amount = n;
  }

  set currency(n) {
    if (!(n instanceof Currency)) {
      throw new TypeError('Currency must be an instance of class Currency');
    }
    this._currency = n;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('ConversionRate must be a number');
    }
    return this.amount * this.conversionRate;
  }
}
export default Pricing;
