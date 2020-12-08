class Negotiation {

    constructor(date, amount, value) {
        this.date = date;
        this.amount = amount;
        this.value = value;
        this.volume = amount * value;
    }
}