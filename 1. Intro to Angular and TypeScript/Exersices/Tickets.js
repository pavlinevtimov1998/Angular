function createTickets(data, criteria) {
    var Ticket = /** @class */ (function () {
        function Ticket(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
        return Ticket;
    }());
    var arr = [];
    data.forEach(function (element) {
        var _a = element.split("|"), destination = _a[0], _ = _a[1], status = _a[2];
        var price = +element.split("|")[1];
        arr.push(new Ticket(destination, +price.toFixed(5), status));
    });
    var sorted = arr.sort(function (a, b) {
        return a[criteria].localeCompare(b[criteria]) || a[criteria] - b[criteria];
    });
    return sorted;
}
console.log(createTickets([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
], "destination"));
