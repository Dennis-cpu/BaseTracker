class Tracker {
    _id = Symbol()
    _name = Symbol()
    _imei = Symbol()
    _network = Symbol()
    _password = Symbol()
    _ipAddress = Symbol()
    _contacts = Symbol()
    _serviceProvider = Symbol()
    _packages = Symbol()
    _price = Symbol()
    _isSold = Symbol()
    _isActive = Symbol()
    _regDate = Symbol()
    _userId = Symbol()


    constructor(id, name, imei, network, password, ipAddress, contacts, serviceProvider, packages, price, isSold, isActive, regDate, userId) {
        this._id = id;
        this._name = name;
        this._imei = imei;
        this._network = network;
        this._password = password;
        this._ipAddress = ipAddress;
        this._contacts = contacts;
        this._serviceProvider = serviceProvider;
        this._packages = packages;
        this._price = price;
        this._isSold = isSold;
        this._isActive = isActive;
        this._regDate = regDate;
        this._userId = userId;
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

    get imei() {
        return this._imei;
    }

    set imei(value) {
        this._imei = value;
    }

    get network() {
        return this._network;
    }

    set network(value) {
        this._network = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get ipAddress() {
        return this._ipAddress;
    }

    set ipAddress(value) {
        this._ipAddress = value;
    }

    get contacts() {
        return this._contacts;
    }

    set contacts(value) {
        this._contacts = value;
    }

    get serviceProvider() {
        return this._serviceProvider;
    }

    set serviceProvider(value) {
        this._serviceProvider = value;
    }

    get packages() {
        return this._packages;
    }

    set packages(value) {
        this._packages = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get isSold() {
        return this._isSold;
    }

    set isSold(value) {
        this._isSold = value;
    }

    get isActive() {
        return this._isActive;
    }

    set isActive(value) {
        this._isActive = value;
    }

    get regDate() {
        return this._regDate;
    }

    set regDate(value) {
        this._regDate = value;
    }

    get userId() {
        return this._userId;
    }

    set userId(value) {
        this._userId = value;
    }
}