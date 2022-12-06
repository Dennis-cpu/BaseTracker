class Transaction {
    _id = Symbol()
    _trans_name = Symbol()
    _date = Symbol()
    _time = Symbol()
    _amount = Symbol()
    _sold_tracker_id = Symbol()
    _user_id = Symbol()


    constructor(id, trans_name, date, time, amount, sold_tracker_id, user_id) {
        this._id = id;
        this._trans_name = trans_name;
        this._date = date;
        this._time = time;
        this._amount = amount;
        this._sold_tracker_id = sold_tracker_id;
        this._user_id = user_id;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get trans_name() {
        return this._trans_name;
    }

    set trans_name(value) {
        this._trans_name = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }

    get time() {
        return this._time;
    }

    set time(value) {
        this._time = value;
    }

    get amount() {
        return this._amount;
    }

    set amount(value) {
        this._amount = value;
    }

    get sold_tracker_id() {
        return this._sold_tracker_id;
    }

    set sold_tracker_id(value) {
        this._sold_tracker_id = value;
    }

    get user_id() {
        return this._user_id;
    }

    set user_id(value) {
        this._user_id = value;
    }
}

module.exports = Transaction;