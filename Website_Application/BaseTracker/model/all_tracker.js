class AllTracker {
    _id = Symbol()
    _name = Symbol()
    _type = Symbol()
    _network= Symbol()
    _reg_name = Symbol()
    _reg_date = Symbol()
    _reg_time = Symbol()
    _imei = Symbol()
    _passwords = Symbol()
    _buy_price = Symbol()


    constructor(name, type, network, reg_name, reg_date, reg_time, imei, passwords, buy_price) {
        this._name = name;
        this._type = type;
        this._reg_name = reg_name;
        this._reg_date = reg_date;
        this._reg_time = reg_time;
        this._imei = imei;
        this._passwords = passwords;
        this._buy_price = buy_price;
        this._network = network;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get reg_name() {
        return this._reg_name;
    }

    set reg_name(value) {
        this._reg_name = value;
    }

    get reg_date() {
        return this._reg_date;
    }

    set reg_date(value) {
        this._reg_date = value;
    }

    get reg_time() {
        return this._reg_time;
    }

    set reg_time(value) {
        this._reg_time = value;
    }

    get imei() {
        return this._imei;
    }

    set imei(value) {
        this._imei = value;
    }

    get passwords() {
        return this._passwords;
    }

    set passwords(value) {
        this._passwords = value;
    }

    get buy_price() {
        return this._buy_price;
    }

    set buy_price(value) {
        this._buy_price = value;
    }


    get network() {
        return this._network;
    }

    set network(value) {
        this._network = value;
    }
}
module.exports = AllTracker;