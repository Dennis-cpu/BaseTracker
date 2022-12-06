class User {
    _id = Symbol()
    _name = Symbol()
    _surname = Symbol()
    _email = Symbol()
    _contacts = Symbol()
    _address = Symbol()
    _is_active = Symbol()
    _reg_date = Symbol()
    _reg_time = Symbol()
    _passwords = Symbol()
    _kin_contacts = Symbol()
    _kin_name = Symbol()


    constructor(name, surname, email, contacts, address, is_active, reg_date, reg_time, passwords, kin_contacts, kin_name) {
        this._name = name;
        this._surname = surname;
        this._email = email;
        this._contacts = contacts;
        this._address = address;
        this._is_active = is_active;
        this._reg_date = reg_date;
        this._reg_time = reg_time;
        this._passwords = passwords;
        this._kin_contacts = kin_contacts;
        this._kin_name = kin_name;
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

    get is_active() {
        return this._is_active;
    }

    set is_active(value) {
        this._is_active = value;
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

    get passwords() {
        return this._passwords;
    }

    set passwords(value) {
        this._passwords = value;
    }

    get kin_contacts() {
        return this._kin_contacts;
    }

    set kin_contacts(value) {
        this._kin_contacts = value;
    }

    get kin_name() {
        return this._kin_name;
    }

    set kin_name(value) {
        this._kin_name = value;
    }
}

module.exports = User;