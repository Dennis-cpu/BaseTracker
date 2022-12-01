class Transaction {
    _id = Symbol()
    _date = Symbol()
    _amount = Symbol()
    _trackerId = Symbol()


    constructor(id, date, amount, trackerId) {
        this._id = id;
        this._date = date;
        this._amount = amount;
        this._trackerId = trackerId;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }

    get amount() {
        return this._amount;
    }

    set amount(value) {
        this._amount = value;
    }

    get trackerId() {
        return this._trackerId;
    }

    set trackerId(value) {
        this._trackerId = value;
    }
}