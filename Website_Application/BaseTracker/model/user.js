class User {
    _id = Symbol()
    _name = Symbol()
    _surname = Symbol()
    _email = Symbol()
    _contacts = Symbol()
    _address = Symbol()
    _isActive = Symbol()
    _regDate = Symbol()
    _regTime = Symbol()
    _passwords = Symbol()


    constructor(name, surname, email, contacts, address, isActive, regDate, regTime, passwords) {
        this._name = name;
        this._surname = surname;
        this._email = email;
        this._contacts = contacts;
        this._address = address;

        this._isActive = isActive;
        this._regDate = regDate;
        this._regTime = regTime;
        this._passwords = passwords;
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

    get surname() {
        return this._surname;
    }

    set surname(value) {
        this._surname = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get contacts() {
        return this._contacts;
    }

    set contacts(value) {
        this._contacts = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
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

    get passwords() {
        return this._passwords;
    }

    set passwords(value) {
        this._passwords = value;
    }


    get regTime() {
        return this._regTime;
    }

    set regTime(value) {
        this._regTime = value;
    }
}

module.exports = User;