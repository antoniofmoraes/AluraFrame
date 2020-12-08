class Negotiation {

    constructor(date, amount, value) {
        this._date = date;
        this._amount = amount;
        this._value = value;
        this._volume = amount * value;
        Object.freeze(this);
    }

    get date() { return this._date; }
    get amount() { return this._amount; }
    get value() { return this._value; }
    get volume() { return this._volume; }
}