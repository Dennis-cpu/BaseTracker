class SoldTracker {

    _id = Symbol()
    _reg_name = Symbol()
    _reg_date = Symbol()
    _reg_time = Symbol()
    _ip_address = Symbol()
    _num_phone = Symbol()
    _service_provider = Symbol()
    _packages = Symbol()
    _status = Symbol()
    _sold_price = Symbol()
    _is_active = Symbol()
    _user_id = Symbol()
    _all_tracker_id = Symbol()


    constructor(id, reg_name, reg_date, reg_time, ip_address, num_phone, service_provider, packages, status, sold_price, is_active, user_id, all_tracker_id) {
        this._id = id;
        this._reg_name = reg_name;
        this._reg_date = reg_date;
        this._reg_time = reg_time;
        this._ip_address = ip_address;
        this._num_phone = num_phone;
        this._service_provider = service_provider;
        this._packages = packages;
        this._status = status;
        this._sold_price = sold_price;
        this._is_active = is_active;
        this._user_id = user_id;
        this._all_tracker_id = all_tracker_id;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
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


    get ip_address() {
        return this._ip_address;
    }

    set ip_address(value) {
        this._ip_address = value;
    }

    get num_phone() {
        return this._num_phone;
    }

    set num_phone(value) {
        this._num_phone = value;
    }

    get service_provider() {
        return this._service_provider;
    }

    set service_provider(value) {
        this._service_provider = value;
    }

    get packages() {
        return this._packages;
    }

    set packages(value) {
        this._packages = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get sold_price() {
        return this._sold_price;
    }

    set sold_price(value) {
        this._sold_price = value;
    }

    get is_active() {
        return this._is_active;
    }

    set is_active(value) {
        this._is_active = value;
    }

    get user_id() {
        return this._user_id;
    }

    set user_id(value) {
        this._user_id = value;
    }

    get all_tracker_id() {
        return this._all_tracker_id;
    }

    set all_tracker_id(value) {
        this._all_tracker_id = value;
    }
}

module.exports = SoldTracker;