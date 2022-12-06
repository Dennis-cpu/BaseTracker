class Order {

    _id = Symbol()
    _tracker_type = Symbol()
    _network = Symbol()
    _quantity = Symbol()
    _trackers_amount = Symbol()
    _shipping_intl = Symbol()
    _shipping_sa = Symbol()
    _other_expenses = Symbol()
    _tax = Symbol()
    _desc_other_expenses = Symbol()
    _is_arrived = Symbol()
    _order_date = Symbol()
    _order_time = Symbol()
    _arrive_date = Symbol()
    _arrive_time = Symbol()
    _tracker_count = Symbol()


    constructor(tracker_type, network, quantity, trackers_amount, shipping_intl, shipping_sa, other_expenses, tax, desc_other_expenses, is_arrived, order_date, order_time, arrive_date, arrive_time, tracker_count) {
        this._tracker_type = tracker_type;
        this._network = network;
        this._quantity = quantity;
        this._trackers_amount = trackers_amount;
        this._shipping_intl = shipping_intl;
        this._shipping_sa = shipping_sa;
        this._other_expenses = other_expenses;
        this._tax = tax;
        this._desc_other_expenses = desc_other_expenses;
        this._is_arrived = is_arrived;
        this._order_date = order_date;
        this._order_time = order_time;
        this._arrive_date = arrive_date;
        this._arrive_time = arrive_time;
        this._tracker_count = tracker_count;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get tracker_type() {
        return this._tracker_type;
    }

    set tracker_type(value) {
        this._tracker_type = value;
    }

    get network() {
        return this._network;
    }

    set network(value) {
        this._network = value;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value;
    }

    get trackers_amount() {
        return this._trackers_amount;
    }

    set trackers_amount(value) {
        this._trackers_amount = value;
    }

    get shipping_intl() {
        return this._shipping_intl;
    }

    set shipping_intl(value) {
        this._shipping_intl = value;
    }

    get shipping_sa() {
        return this._shipping_sa;
    }

    set shipping_sa(value) {
        this._shipping_sa = value;
    }

    get other_expenses() {
        return this._other_expenses;
    }

    set other_expenses(value) {
        this._other_expenses = value;
    }

    get tax() {
        return this._tax;
    }

    set tax(value) {
        this._tax = value;
    }

    get desc_other_expenses() {
        return this._desc_other_expenses;
    }

    set desc_other_expenses(value) {
        this._desc_other_expenses = value;
    }

    get is_arrived() {
        return this._is_arrived;
    }

    set is_arrived(value) {
        this._is_arrived = value;
    }

    get order_date() {
        return this._order_date;
    }

    set order_date(value) {
        this._order_date = value;
    }

    get order_time() {
        return this._order_time;
    }

    set order_time(value) {
        this._order_time = value;
    }

    get arrive_date() {
        return this._arrive_date;
    }

    set arrive_date(value) {
        this._arrive_date = value;
    }

    get arrive_time() {
        return this._arrive_time;
    }

    set arrive_time(value) {
        this._arrive_time = value;
    }

    get tracker_count() {
        return this._tracker_count;
    }

    set tracker_count(value) {
        this._tracker_count = value;
    }
}